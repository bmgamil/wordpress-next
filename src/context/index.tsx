'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type Context = {
  appMode: 'dark' | 'light' | string;
  setAppMode?: Dispatch<SetStateAction<'dark' | 'light' | string>>;
};

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
