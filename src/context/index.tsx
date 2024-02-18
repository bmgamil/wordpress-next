'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type Context = {
  appMode: 'dark' | 'light';
  setAppMode?: Dispatch<SetStateAction<'dark' | 'light'>>;
};

const AppContext = createContext<Context>({ appMode: 'dark' });

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const getThemeLocalStorage = window?.localStorage.getItem('appMode');
  const useThemeLocalStorage = getThemeLocalStorage
    ? JSON.parse(getThemeLocalStorage)
    : 'dark';

  const [appMode, setAppMode] = useState<'dark' | 'light'>(
    useThemeLocalStorage
  );

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
