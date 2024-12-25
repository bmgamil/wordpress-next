import { Box } from '@mui/material';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import ScrollBar from '../Components/Atoms/Scrollbar';
import Footer from '../Components/Organisms/Footer';
import Header from '../Components/Organisms/Header';
import '../globals.css';
import { getOptions, getServices } from '../lib/Controller';
import ThemeRegistry from '../ThemeRegistery';

export const metadata: Metadata = {
  title: { default: 'UNITS', template: 'UNITS | %s' },
  description:
    'We Are Units, We Design, Develop & Deliver Digital Products,It is our job to have a final product that is appealing, functioning and understandable.',
  metadataBase: new URL(process.env.NEXT_SITE_URL || 'http://units.com.eg'),
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const servicePromise = getServices();
  const optionsPromise: Promise<options> = getOptions();

  const [{ services }, options] = await Promise.all([
    servicePromise,
    optionsPromise,
  ]);

  return (
    <html lang={locale} dir={dir}>
      <GoogleTagManager gtmId='GTM-5F3NRLNN' />
      <NextIntlClientProvider messages={messages}>
        {/* <AppWrapper> */}
        <ThemeRegistry>
          <body>
            <Box
              sx={{
                display: 'grid',
                gridTemplateRows: '1fr auto',
                minHeight: '100dvh',
                overflowX: 'hidden',
              }}
            >
              {options.header && (
                <Header header={options.header} services={services} />
              )}
              <ScrollBar />
              {children}
              <Footer footer={options.footer} />
            </Box>
          </body>
        </ThemeRegistry>
        {/* </AppWrapper> */}
      </NextIntlClientProvider>
    </html>
  );
}
