import { en, type Dict } from './en';
import { ru } from './ru';

export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dicts: Record<Locale, Dict> = { en, ru };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return seg && isLocale(seg) ? seg : defaultLocale;
}

export function t(locale: Locale): Dict {
  return dicts[locale];
}

export function localizedPath(locale: Locale, path: string = ''): string {
  const clean = path.replace(/^\/+/, '');
  return `/${locale}${clean ? `/${clean}` : ''}`;
}

export function altLocale(locale: Locale): Locale {
  return locale === 'en' ? 'ru' : 'en';
}

export function swapLocaleInPath(pathname: string, target: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] && isLocale(parts[0])) {
    parts[0] = target;
  } else {
    parts.unshift(target);
  }
  return '/' + parts.join('/');
}
