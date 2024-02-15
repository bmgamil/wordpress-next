import { handleFontSize, handleFontWeight } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '2rem',
      width: '80%',
      marginInline: 'auto',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },

    heading: {
      [theme.breakpoints.up('md')]: {
        '& > div:last-child': {
          display: 'none',
        },
      },
      [theme.breakpoints.down('md')]: {
        '& > div:first-child': {
          display: 'none',
        },
      },
    },
  };
});

export default useStyles;
