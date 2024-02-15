import { handleBorderRadiusSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '2rem',
      textTransform: 'capitalize',
      background: '#fff',
      padding: '1rem',
      borderRadius: handleBorderRadiusSize('xl'),
    },

    form: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '1rem',
    },
  };
});

export default useStyles;
