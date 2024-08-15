import { LocalePrefix } from 'next-intl/routing';

export const locales = ['en', 'ar'] as const;

export const pathnames = {
  '/': '/',
  '/about-us': {
    en: '/about-us',
    ar: '/about-us',
  },
  '/projects': {
    en: '/projects',
    ar: '/projects',
  },
  '/blogs': {
    en: '/blogs',
    ar: '/blogs',
  },
  '/contact-us': {
    en: '/contact-us',
    ar: '/contact-us',
  },
};

export const localePrefix = 'as-needed' satisfies LocalePrefix;

export type AppPathnames = keyof typeof pathnames;
