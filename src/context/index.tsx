'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type Context = {
  appMode: 'dark' | 'light' | string;
  setAppMode?: Dispatch<SetStateAction<'dark' | 'light' | string>>;
};

// const getThemeLocalStorage =
//   typeof window !== 'undefined' && window.localStorage.getItem('appMode');
// const useThemeLocalStorage = getThemeLocalStorage
//   ? JSON.parse(getThemeLocalStorage)
//   : 'dark';

const AppContext = createContext<Context>({ appMode: 'dark' });

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [appMode, setAppMode] = useState('');

  return (
    <AppContext.Provider
      value={{
        appMode,
        setAppMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
