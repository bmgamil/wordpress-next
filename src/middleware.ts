import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const nextIntlMiddleWare = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleWare(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*'],
};
