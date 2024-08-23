import type { Metadata } from 'next';
import { Box } from '@mui/material';
import { NextIntlClientProvider } from 'next-intl';

import '../globals.css';
import ThemeRegistry from '../ThemeRegistery';
import Header from '../Components/Organisms/Header';
import Footer from '../Components/Organisms/Footer';
import ScrollBar from '../Components/Atoms/Scrollbar';
import { getOptions, getServices } from '../lib/Controller';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'UNITS',
  description: 'Generated by create next app',
  metadataBase: new URL('http://localhost:3000'),
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
  const optionsPromise: Promise<options> = getOptions(locale);

  const [
    {
      services: { services },
    },
    options,
  ] = await Promise.all([servicePromise, optionsPromise]);

  return (
    <html lang={locale} dir={dir}>
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
