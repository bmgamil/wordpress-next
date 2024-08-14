import { handleBorderRadiusSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

type Props = {
  mode: 'dark' | 'light';
  href?: string;
};

export const useStyles = makeStyles<Props>()((theme, { mode, href }) => {
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
      pointerEvents: href ? 'auto' : 'none',
      transitionProperty: 'background-color, border-color',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-in-out',
    },
  };
});

export default useStyles;
