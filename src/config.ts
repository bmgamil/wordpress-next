import { LocalePrefix } from 'next-intl/routing';

export const locales = ['en', 'ar'] as const;

export const pathnames = {
  '/': '/',
};

export const localePrefix = 'as-needed' satisfies LocalePrefix;

export type AppPathnames = keyof typeof pathnames;
