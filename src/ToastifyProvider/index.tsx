'use client';

import { useTheme } from '@mui/material';
import { Flip, ToastContainer } from 'react-toastify';

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const theme = useTheme();
  return (
    <>
      {children}
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
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
