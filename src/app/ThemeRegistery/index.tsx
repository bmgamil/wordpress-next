'use client';
import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useServerInsertedHTML } from 'next/navigation';

import { AppWrapper, useAppContext } from '@/context';
import {
  LTRTheme,
  RTLTheme,
  darkTheme,
  generateTheme,
} from '@/app/theme/theme';

type Props = {
  children: React.ReactNode;
};
export default function ThemeRegistry(props: Props) {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const { children } = props;
  const options = { key: 'mui-theme' };
  const { appMode } = useAppContext();

  const [theme, setTheme] = useState(generateTheme(isAr, appMode));

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
    setTheme(generateTheme(isAr, appMode));
  }, [isAr, appMode]);

  return (
    <AppWrapper>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </AppWrapper>
  );
}
