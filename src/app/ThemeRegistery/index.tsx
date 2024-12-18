'use client';
import { useState } from 'react';
import { useLocale } from 'next-intl';
import createCache from '@emotion/cache';
import { orange } from '@mui/material/colors';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { useServerInsertedHTML } from 'next/navigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Cairo, ClashDisplay } from '../theme/theme';

type Props = {
  children: React.ReactNode;
};

const options = { key: `mui-theme` };
const createEmotionCache = () => {
  const cache = createCache(options);
  cache.compat = true;
  const prevInsert = cache.insert;
  let inserted: string[] = [];
  cache.insert = (...args) => {
    const serialized = args[1];
    if (cache.inserted[serialized.name] === undefined) {
      inserted.push(serialized.name);
    }
    return prevInsert(...args);
  };
  const flush = () => {
    const prevInserted = inserted;
    inserted = [];
    return prevInserted;
  };
  return { cache, flush };
};

export default function ThemeRegistry(props: Props) {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const { children } = props;

  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#090D11',
      },
      primary: {
        main: '#f59f28',
        contrastText: orange[800],
        light: '#ffffff',
        dark: '#090D11',
      },
      grey: {
        '100': '#F2F4F7',
      },
    },
    typography: {
      fontFamily: `${
        isAr ? Cairo.style.fontFamily : ClashDisplay.style.fontFamily
      }, system-ui, Roboto , Helvetica , Arial , sans-serif `,
      fontWeightLight: '300',
      fontWeightRegular: '500',
      fontWeightMedium: '600',
      fontWeightBold: 'bold',
    },
  });

  const [{ cache, flush }] = useState(createEmotionCache);

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    // <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
