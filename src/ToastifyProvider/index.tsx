'use client';

import { useTheme } from '@mui/material';
import { useLocale } from 'next-intl';
import { Flip, ToastContainer } from 'react-toastify';

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const theme = useTheme();
  const locale = useLocale();
  const isArabic = locale === 'ar';
  return (
    <>
      {children}
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar
        closeOnClick={true}
        rtl={isArabic}
        draggable
        draggablePercent={60}
        pauseOnHover
        theme='dark'
        transition={Flip}
        toastStyle={{
          background: `linear-gradient(90deg, ${theme.palette.background.paper} ,  ${theme.palette.grey[900]} , ${theme.palette.grey[800]})`,
          color: theme.palette.primary.light,
        }}
        limit={3}
      />
    </>
  );
}
