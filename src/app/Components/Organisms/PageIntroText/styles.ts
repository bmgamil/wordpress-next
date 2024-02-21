import { handleFontSize, handleFontWeight } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBlock: '10dvh',
      height: '55dvh',

      [theme.breakpoints.down('md')]: {
        height: 'unset',
        paddingBottom: 0,
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
        [theme.breakpoints.down('md')]: {
          justifyContent: 'center',
          flexWrap: 'wrap',
        },
      },
    },
  };
});

export default useStyles;
