(function () {
  'use strict';

  var BLOCKED_PARAMS = ['email', 'username', 'first_name', 'last_name', 'address', 'title', 'description', 'initData', 'hash', 'token'];
  var ALLOWED_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'gbraid', 'wbraid'];

  var scriptEl = document.currentScript || (function () {
    var all = document.querySelectorAll('script[data-surface]');
    return all[all.length - 1] || null;
  })();

  var measurementId = scriptEl ? scriptEl.getAttribute('data-measurement-id') : null;
  var enabled = !!(measurementId && typeof window.gtag === 'function');

  function sanitizePageLocation() {
    var origin = window.location.origin;
    var pathname = window.location.pathname;
    try {
      var search = window.location.search;
      if (search) {
        var params = new URLSearchParams(search);
        var kept = new URLSearchParams();
        for (var i = 0; i < ALLOWED_PARAMS.length; i++) {
          var v = params.get(ALLOWED_PARAMS[i]);
          if (v) kept.set(ALLOWED_PARAMS[i], v);
        }
        var ks = kept.toString();
        if (ks) return origin + pathname + '?' + ks;
      }
    } catch (e) {}
    return origin + pathname;
  }

  function sanitizeParams(params) {
    var out = {};
    if (!params) return out;
    for (var k in params) {
      if (!Object.prototype.hasOwnProperty.call(params, k)) continue;
      if (BLOCKED_PARAMS.indexOf(k) !== -1) continue;
      out[k] = params[k];
    }
    return out;
  }

  function pageView(params) {
    if (!enabled) return;
    var p = sanitizeParams(params);
    p.surface = 'landing';
    p.page_location = sanitizePageLocation();
    window.gtag('event', 'page_view', p);
  }

  function trackEvent(name, params) {
    if (!enabled) return;
    var p = sanitizeParams(params);
    p.surface = 'landing';
    window.gtag('event', name, p);
  }

  window.__analytics = {
    pageView: pageView,
    event: trackEvent,
    trackCtaClick: function (params) { trackEvent('cta_click', params); },
  };

  if (enabled) {
    document.addEventListener('click', function (e) {
      var el = e.target;
      while (el && el !== document.documentElement) {
        if (el.getAttribute && el.getAttribute('data-analytics-event') === 'cta_click') {
          trackEvent('cta_click', {
            cta_id: el.getAttribute('data-cta-id') || '',
            destination: el.getAttribute('data-destination') || '',
          });
          return;
        }
        el = el.parentNode;
      }
    }, true);
  }
})();
