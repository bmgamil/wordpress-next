import { handleBorderRadiusSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

type Props = {
  mode: 'dark' | 'light';
};

export const useStyles = makeStyles<Props>()((theme, { mode }) => {
  return {
    container: {
      padding: '0.3rem 1rem',
      borderRadius: handleBorderRadiusSize('xl'),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:
        mode === 'dark' ? 'rgba(255, 255, 255, 0.50)' : 'transparent',
      borderColor:
        mode === 'light' ? theme.palette.primary.light : 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      textWrap: 'nowrap',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
    },
  };
});

export default useStyles;
