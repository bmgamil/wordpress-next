import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const baseLocal = new Intl.Locale(locale).baseName;
  if (!locales.includes(baseLocal)) notFound();

  return {
    messages: (await import(`./messages/${baseLocal}.json`)).default,
  };
});
