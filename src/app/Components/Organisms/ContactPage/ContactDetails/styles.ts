import { handleFontSize, handleFontWeight } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '2rem',
    },

    description: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      textTransform: 'capitalize',
    },

    details: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      svg: {
        color: theme.palette.primary.main,
      },
    },
  };
});

export default useStyles;
