'use client';
import { useEffect, useMemo, useState } from 'react';
import { useLocale } from 'next-intl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useServerInsertedHTML } from 'next/navigation';

import { AppWrapper, useAppContext } from '@/context';
import { orange } from '@mui/material/colors';
import { Cairo, ClashDisplay } from '../theme/theme';
// import { LTRTheme, RTLTheme } from '@/app/theme/theme';

type Props = {
  children: React.ReactNode;
};
export default function ThemeRegistry(props: Props) {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const { children } = props;
  const { appMode, setAppMode } = useAppContext();
  const options = useMemo(() => ({ key: `mui-theme-${appMode}` }), [appMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: (appMode as 'light') || 'light',
          background: {
            default: appMode === 'dark' ? '#090D11' : '#FFF',
          },
          primary: {
            main: '#F37820',
            contrastText: orange[800],
            light: appMode === 'dark' ? '#ffffff' : '#090D11',
            dark: appMode === 'dark' ? '#090D11' : '#ffffff',
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
      }),
    [appMode]
  );

  const [{ cache, flush }] = useState(() => {
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
  });

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getThemeLocalStorage =
        typeof window !== 'undefined' && window.localStorage.getItem('appMode');
      const useThemeLocalStorage = getThemeLocalStorage
        ? JSON.parse(getThemeLocalStorage)
        : 'dark';
      setAppMode && setAppMode(useThemeLocalStorage);
    }
    flush();
  }, [appMode]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
