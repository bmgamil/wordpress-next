import { orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';

const ClashDisplay = localFont({
  src: '../fonts/ClashDisplay-Variable.ttf',
  display: 'swap',
});

const Cairo = localFont({
  src: '../fonts/Cairo.ttf',
  display: 'swap',
});

export const darkTheme = {
  palette: {
    mode: 'dark',
    background: {
      default: '#090D11',
    },
    primary: {
      main: '#F37820',
      contrastText: orange[800],
      light: '#ffffff',
      dark: '#090D11',
    },
    grey: {
      '100': '#F2F4F7',
    },
  },
  shape: {
    borderRadius: 6,
  },
};
export const lightTheme = {
  palette: {
    mode: 'light',
    background: {
      default: '#EDED',
    },
    primary: {
      main: '#F37820',
      contrastText: orange[800],
      light: '#090D11',
      dark: '#ffffff',
    },
    grey: {
      '100': '#F2F4F7',
    },
  },
  shape: {
    borderRadius: 6,
  },
};

export const LTRTheme = {
  typography: {
    fontFamily: `${ClashDisplay.style.fontFamily}, system-ui, Roboto , Helvetica , Arial , sans-serif `,
    fontWeightLight: '300',
    fontWeightRegular: '500',
    fontWeightMedium: '600',
    fontWeightBold: 'bold',
  },
};

export const RTLTheme = {
  typography: {
    fontFamily: `${Cairo.style.fontFamily}, system-ui, Roboto , Helvetica , Arial , sans-serif `,
    fontWeightLight: '300',
    fontWeightRegular: '500',
    fontWeightMedium: '600',
    fontWeightBold: 'bold',
  },
};

export const generateTheme = (isAr: boolean, mode: 'dark' | 'light') => {
  if (mode === 'dark') {
    if (isAr) {
      // @ts-ignore
      const theme = createTheme({ ...darkTheme, ...RTLTheme });

      return theme;
    } else {
      // @ts-ignore
      const theme = createTheme({ ...darkTheme, ...LTRTheme });

      return theme;
    }
  } else {
    if (isAr) {
      // @ts-ignore
      const theme = createTheme({ ...lightTheme, ...RTLTheme });

      return theme;
    } else {
      // @ts-ignore
      const theme = createTheme({ ...lightTheme, ...LTRTheme });

      return theme;
    }
  }
};
