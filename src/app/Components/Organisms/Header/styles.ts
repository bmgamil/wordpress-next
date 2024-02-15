import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<{ isAr: boolean }>()((theme, { isAr }) => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.8rem',
      padding: '1rem',

      [theme.breakpoints.up('md')]: {
        background: 'linear-gradient(0deg,transparent,black)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
      },
      [theme.breakpoints.down('md')]: {
        marginBottom: '2rem',
        position: 'relative',
      },
    },
    navContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.8rem',
      [theme.breakpoints.down('md')]: {
        position: 'absolute',
        top: '100%',
        right: !isAr ? '1rem' : '',
        left: isAr ? '1rem' : '',
        background: theme.palette.primary.main,
        padding: '1rem',
        borderRadius: theme.shape.borderRadius,
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 999,
        boxShadow: theme.shadows[4],
        transitionProperty: 'visibility, opacity, transform ',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        visibility: 'hidden',
        opacity: 0,
        transform: 'translateY(-10px)',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        right: '0',
      },

      '&.active': {
        visibility: 'visible',
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  };
});

export default useStyles;
