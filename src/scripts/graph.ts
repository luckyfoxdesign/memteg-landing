type GNode = {
  el: HTMLElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  pinned: boolean;
};

type GEdge = { a: number; b: number; el: SVGLineElement };

const REPULSION = 5200;
const SPRING = 0.045;
const REST = 110;
const DAMPING = 0.84;
const CENTER = 0.0025;
const PAD = 26;
const MAX_V = 18;

function init(container: HTMLElement) {
  if (container.dataset.graphReady === '1') return;

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const svg = container.querySelector<SVGSVGElement>('svg.graph-svg');
  const nodeEls = Array.from(container.querySelectorAll<HTMLElement>('[data-graph-node]'));
  const lineEls = Array.from(container.querySelectorAll<SVGLineElement>('[data-graph-edge]'));
  if (!svg || nodeEls.length === 0) return;

  container.dataset.graphReady = '1';

  let { width: w, height: h } = container.getBoundingClientRect();

  const nodes: GNode[] = nodeEls.map((el) => {
    const px = (parseFloat(el.dataset.graphX || '50') / 100) * w;
    const py = (parseFloat(el.dataset.graphY || '50') / 100) * h;
    return { el, x: px, y: py, vx: 0, vy: 0, pinned: false };
  });

  const edges: GEdge[] = lineEls.map((el) => ({
    a: Number(el.dataset.from || 0),
    b: Number(el.dataset.to || 0),
    el,
  }));

  // switch SVG to px coordinate space
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  svg.setAttribute('preserveAspectRatio', 'none');

  container.classList.add('is-interactive');

  // initial render — write transforms now so the switch from CSS-positioning is seamless
  for (const n of nodes) {
    n.el.style.transform = `translate(${n.x}px, ${n.y}px) translate(-50%, -50%)`;
  }
  syncEdges();

  // entrance animation: scale-in with stagger
  nodes.forEach((n, i) => {
    n.el.style.opacity = '0';
    n.el.style.transform = `translate(${n.x}px, ${n.y}px) translate(-50%, -50%) scale(0.4)`;
    setTimeout(() => {
      n.el.style.transition = 'opacity 0.45s ease, transform 0.55s cubic-bezier(0.2, 0.7, 0.3, 1.25)';
      n.el.style.opacity = '1';
      n.el.style.transform = `translate(${n.x}px, ${n.y}px) translate(-50%, -50%) scale(1)`;
      setTimeout(() => {
        n.el.style.transition = '';
      }, 700);
    }, 80 + i * 75);
  });

  // drag
  for (const n of nodes) {
    n.el.addEventListener('pointerdown', (ev) => {
      ev.preventDefault();
      n.el.setPointerCapture(ev.pointerId);
      n.pinned = true;
      const r0 = container.getBoundingClientRect();

      const onMove = (e: PointerEvent) => {
        const r = container.getBoundingClientRect();
        n.x = Math.max(PAD, Math.min(r.width - PAD, e.clientX - r.left));
        n.y = Math.max(PAD, Math.min(r.height - PAD, e.clientY - r.top));
        n.vx = 0;
        n.vy = 0;
      };
      const onUp = (e: PointerEvent) => {
        n.pinned = false;
        n.el.removeEventListener('pointermove', onMove);
        n.el.removeEventListener('pointerup', onUp);
        n.el.removeEventListener('pointercancel', onUp);
        try {
          n.el.releasePointerCapture(e.pointerId);
        } catch {}
      };
      n.el.addEventListener('pointermove', onMove);
      n.el.addEventListener('pointerup', onUp);
      n.el.addEventListener('pointercancel', onUp);
      void r0;
    });
  }

  // resize: scale positions proportionally + update viewBox
  const ro = new ResizeObserver(() => {
    const { width: nw, height: nh } = container.getBoundingClientRect();
    if (!nw || !nh || (nw === w && nh === h)) return;
    const sx = nw / w;
    const sy = nh / h;
    for (const n of nodes) {
      n.x *= sx;
      n.y *= sy;
    }
    w = nw;
    h = nh;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  });
  ro.observe(container);

  // pause when offscreen
  let visible = false;
  let running = false;
  const io = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !running) {
        running = true;
        requestAnimationFrame(step);
      }
    },
    { threshold: 0.05 },
  );
  io.observe(container);

  function syncEdges() {
    for (const e of edges) {
      const a = nodes[e.a];
      const b = nodes[e.b];
      e.el.setAttribute('x1', String(a.x));
      e.el.setAttribute('y1', String(a.y));
      e.el.setAttribute('x2', String(b.x));
      e.el.setAttribute('y2', String(b.y));
    }
  }

  function step() {
    if (!visible) {
      running = false;
      return;
    }

    const cx = w / 2;
    const cy = h / 2;
    const fx = new Array<number>(nodes.length).fill(0);
    const fy = new Array<number>(nodes.length).fill(0);

    // pairwise repulsion
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d2 = dx * dx + dy * dy + 1;
        const d = Math.sqrt(d2);
        const f = REPULSION / d2;
        const fxv = (f * dx) / d;
        const fyv = (f * dy) / d;
        fx[i] += fxv;
        fy[i] += fyv;
        fx[j] -= fxv;
        fy[j] -= fyv;
      }
    }

    // springs along edges
    for (const e of edges) {
      const dx = nodes[e.b].x - nodes[e.a].x;
      const dy = nodes[e.b].y - nodes[e.a].y;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = SPRING * (d - REST);
      const fxv = (force * dx) / d;
      const fyv = (force * dy) / d;
      fx[e.a] += fxv;
      fy[e.a] += fyv;
      fx[e.b] -= fxv;
      fy[e.b] -= fyv;
    }

    // weak center pull
    for (let i = 0; i < nodes.length; i++) {
      fx[i] += (cx - nodes[i].x) * CENTER;
      fy[i] += (cy - nodes[i].y) * CENTER;
    }

    // integrate
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (n.pinned) continue;
      n.vx = (n.vx + fx[i]) * DAMPING;
      n.vy = (n.vy + fy[i]) * DAMPING;
      // velocity clamp
      if (n.vx > MAX_V) n.vx = MAX_V;
      else if (n.vx < -MAX_V) n.vx = -MAX_V;
      if (n.vy > MAX_V) n.vy = MAX_V;
      else if (n.vy < -MAX_V) n.vy = -MAX_V;
      n.x += n.vx;
      n.y += n.vy;
      // soft boundary
      if (n.x < PAD) {
        n.x = PAD;
        n.vx *= -0.3;
      } else if (n.x > w - PAD) {
        n.x = w - PAD;
        n.vx *= -0.3;
      }
      if (n.y < PAD) {
        n.y = PAD;
        n.vy *= -0.3;
      } else if (n.y > h - PAD) {
        n.y = h - PAD;
        n.vy *= -0.3;
      }
    }

    // render
    for (const n of nodes) {
      n.el.style.transform = `translate(${n.x}px, ${n.y}px) translate(-50%, -50%)`;
    }
    syncEdges();

    requestAnimationFrame(step);
  }
}

function bootstrap() {
  document.querySelectorAll<HTMLElement>('[data-graph]').forEach(init);
}

bootstrap();
document.addEventListener('astro:page-load', bootstrap);
