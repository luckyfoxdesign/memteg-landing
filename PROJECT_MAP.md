# Project Map

<!-- Этот файл генерируется автоматически или обновляется вручную. -->
<!-- Читай его перед задачами вместо сканирования всего проекта. -->

## Статус проекта

Каркас лендинга собран: главная, /privacy, /terms, /contact в двух локалях (en/ru). Сборка и type-check зелёные. Готово к итерациям по контенту и дизайну.

## Стек

| Компонент | Технология |
|-----------|------------|
| Фреймворк | Astro 6.3 (статика) |
| Стили     | Tailwind v4 через `@tailwindcss/postcss` (vite-плагин несовместим с rolldown в Astro 6) |
| Шрифты    | Inter Variable + JetBrains Mono (через `@fontsource*`, импорт в layout) |
| i18n      | Astro `i18n` + словари `src/i18n/{en,ru}.ts`, оба языка с префиксом |
| Sitemap   | `@astrojs/sitemap` с локалями |
| Деплой    | Cloudflare Pages / Vercel / GitHub Pages (статика) |
| Docker    | `compose.yml` — Node 22 alpine, polling watch для горячей перезагрузки |

## Страницы / Роуты

| URL | Файл | Назначение |
|-----|------|------------|
| `/` | `src/pages/index.astro` | Клиентский редирект на `/en` или `/ru` по `navigator.language` (с meta-refresh fallback) |
| `/{en,ru}` | `src/pages/[lang]/index.astro` | Главная: hero, quote, how-it-works, bento features, who-for, privacy block, FAQ, final CTA |
| `/{en,ru}/privacy` | `src/pages/[lang]/privacy.astro` | Политика конфиденциальности |
| `/{en,ru}/terms`   | `src/pages/[lang]/terms.astro` | Пользовательское соглашение |
| `/{en,ru}/contact` | `src/pages/[lang]/contact.astro` | Контактная страница с Telegram CTA |

## Модули

| Путь | Назначение |
|------|------------|
| `src/layouts/BaseLayout.astro` | Каркас: html/head/SEO/hreflang, импорт шрифтов и стилей, intersection-observer для `[data-reveal]` |
| `src/components/Nav.astro` | Sticky nav: лого, ссылки, переключатель языка, CTA |
| `src/components/Footer.astro` | Футер с навигацией и копирайтом |
| `src/components/Logo.astro` | Wordmark `memteg` |
| `src/components/LangSwitch.astro` | Переключатель `EN/RU` с подменой `lang`-сегмента в URL |
| `src/components/LegalLayout.astro` | Шаблон для статичного юр-текста |
| `src/components/mocks/ChatMock.astro` | HTML/CSS-мокап Telegram-чата для hero |
| `src/components/sections/*.astro` | Hero, Quote, HowItWorks, Features (bento), WhoFor, PrivacyBlock, Faq, FinalCta |
| `src/i18n/en.ts`, `ru.ts` | Словари (вся текстовка лендинга и legal) |
| `src/i18n/index.ts` | Утилиты: `t`, `localizedPath`, `swapLocaleInPath` |
| `src/styles/global.css` | Tailwind + дизайн-токены через `@theme`, базовые стили, `[data-reveal]` |

## Дизайн-токены

Объявлены в `src/styles/global.css` через `@theme`. Палитра — light-first, тёплый off-white + sage accent + pop-цвета (butter / peach / mint / clay / lilac) для bento-карточек. Тёмно-фиолетовый/индиго не используется. Tailwind-классы через CSS-переменные: `bg-[var(--color-bg)]` и т.д.

## Docker / Сервисы

`compose.yml` — один сервис `app` (node:22-alpine), volume на `./` + named volume на `node_modules`, polling watch.

| Команда | Действие |
|---------|----------|
| `docker compose up app` | Dev-сервер на `http://localhost:4321` (запускает `npm install && npm run dev`) |
| `docker compose run --rm app npm run build` | Prod-сборка в `dist/` |
| `docker compose run --rm app npm run check` | Type-check (`astro check`) |
| `docker compose run --rm app npm install <pkg>` | Установка пакета |

## Конфигурация

`.env` (локально) и `.env.example` (в репо) — переменные:
- `PUBLIC_BOT_URL` — ссылка на чат с ботом (на старте `https://t.me/`, заменить когда появится username)
- `PUBLIC_CONTACT_BOT_URL` — ссылка на чат с ботом для страницы Contact (может отличаться от invite deep link)
- `PUBLIC_SITE_URL` — каноничный URL сайта (используется в `<canonical>`, OG, sitemap)

## Если нужно сделать X

| Задача | Файл / модуль |
|--------|---------------|
| Изменить тексты главной | `src/i18n/{en,ru}.ts` (поля `hero`, `how`, `features`, `whoFor`, `privacy`, `faq`, `finalCta`) |
| Изменить мокап чата | `src/components/mocks/ChatMock.astro` |
| Добавить язык | новый файл `src/i18n/<lang>.ts` + добавить в `locales` в `src/i18n/index.ts` и `astro.config.mjs` |
| Подменить ссылку на бота | `.env` → `PUBLIC_BOT_URL` |
| Поменять палитру | `@theme` в `src/styles/global.css` |
| Обновить Privacy / ToS | `privacyPage` / `termsPage` в словарях |
| Настроить деплой | `astro.config.mjs` + `wrangler.toml` / `.github/workflows/` (пока не настроено) |

## Активные задачи

<!-- Ссылки на docs/wip/ -->

## Недавно завершено

<!-- Ссылки на docs/done/short/ -->
