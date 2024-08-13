import { orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';

export const ClashDisplay = localFont({
  src: '../fonts/ClashDisplay-Variable.ttf',
  display: 'swap',
});

export const Cairo = localFont({
  src: '../fonts/Cairo.ttf',
  display: 'swap',
});

// export const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     background: {
//       default: '#090D11',
//     },
//     primary: {
//       main: '#f59f28',
//       contrastText: orange[800],
//       light: '#ffffff',
//       dark: '#090D11',
//     },
//     grey: {
//       '100': '#F2F4F7',
//     },
//   },
//   shape: {
//     borderRadius: 6,
//   },
// });

// export const LTRTheme = createTheme({
//   ...darkTheme,
//   typography: {
//     fontFamily: `${ClashDisplay.style.fontFamily}, system-ui, Roboto , Helvetica , Arial , sans-serif `,
//     fontWeightLight: '300',
//     fontWeightRegular: '500',
//     fontWeightMedium: '600',
//     fontWeightBold: 'bold',
//   },
// });

// export const RTLTheme = createTheme({
//   ...darkTheme,

//   typography: {
//     fontFamily: `${Cairo.style.fontFamily}, system-ui, Roboto , Helvetica , Arial , sans-serif `,
//     fontWeightLight: '300',
//     fontWeightRegular: '500',
//     fontWeightMedium: '600',
//     fontWeightBold: 'bold',
//   },
// });
