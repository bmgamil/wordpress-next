import { Pathnames } from 'next-intl/navigation';
import { LocalePrefix } from 'next-intl/routing';

export const locales = ['en', 'ar'] as const;

export const pathnames = {
  '/': '/',
  '/about-us': {
    en: '/about-us',
    ar: '/عنا',
  },
  '/projects': {
    en: '/projects',
    ar: '/المشاريع',
  },
  '/blogs': {
    en: '/blogs',
    ar: '/مدونات',
  },
  '/contact-us': {
    en: '/contact-us',
    ar: '/تواصل-معنا',
  },
};

export const localePrefix = 'as-needed' satisfies LocalePrefix;

export type AppPathnames = keyof typeof pathnames;
