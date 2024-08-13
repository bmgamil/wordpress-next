import { Pathnames } from 'next-intl/navigation';
import { LocalePrefix } from 'next-intl/routing';

export const locales = ['en', 'ar'] as const;

export const pathnames = {
  '/': '/',
  '/about-us': {
    en: '/about-us',
    ar: '/عنا',
  },
  '/porjects': {
    en: '/porjects',
    ar: '/المشاريع',
  },
};

export const localePrefix = 'as-needed' satisfies LocalePrefix;

export type AppPathnames = keyof typeof pathnames;
