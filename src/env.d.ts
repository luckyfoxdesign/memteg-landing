/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_BOT_URL?: string;
  readonly PUBLIC_CONTACT_BOT_URL?: string;
  readonly PUBLIC_SITE_URL?: string;
  readonly GA4_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  __analytics?: {
    pageView(params?: Record<string, unknown>): void;
    event(name: string, params?: Record<string, unknown>): void;
    trackCtaClick(params: { cta_id: string; destination: string }): void;
  };
}
