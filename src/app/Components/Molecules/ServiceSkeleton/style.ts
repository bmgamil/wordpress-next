import { handleBorderRadiusSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      borderRadius: handleBorderRadiusSize('xl'),
      height: '100%',
    },

    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      textTransform: 'capitalize',
    },
  };
});
