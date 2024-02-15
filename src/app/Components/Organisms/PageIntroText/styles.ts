import { handleFontSize, handleFontWeight } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      [theme.breakpoints.up('md')]: {
        height: '55dvh',
        paddingBlock: '10dvh',
      },
    },
    heading: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textTransform: 'capitalize',
      rowGap: '1rem',
      fontSize: handleFontSize('4xl'),
      fontWeight: theme.typography.fontWeightMedium,

      [theme.breakpoints.down('md')]: {
        fontSize: handleFontSize('3xl'),
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: handleFontSize('2xl'),
      },

      div: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      },
    },
  };
});

export default useStyles;
