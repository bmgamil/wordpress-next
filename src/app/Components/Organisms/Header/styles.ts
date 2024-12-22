import { makeStyles } from 'tss-react/mui';

type Props = { isAr: boolean; isOpen: boolean };

export const useStyles = makeStyles<Props>()((theme, { isAr, isOpen }) => {
  return {
    container: {
      position: 'fixed',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      zIndex: 99,
      background: 'linear-gradient(0deg,transparent,black)',
      [theme.breakpoints.down('md')]: {
        height: isOpen ? '100dvh' : '',
        background: isOpen ? theme.palette.primary.dark : '',
        transitionProperty: `height,background`,
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
      },
    },
    image: {
      maxWidth: '150px !important',
      [theme.breakpoints.down('md')]: {
        maxWidth: '80% !important',
      },
    },
    innerContainer: {
      display: 'grid',
      gridTemplateColumns: '0.5fr 1fr 0.6fr',
      alignItems: 'start',
      justifyContent: 'space-between',
      gap: '0.8rem',
      paddingBlock: '1rem',

      [theme.breakpoints.down('md')]: {
        marginBottom: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gridTemplateRows: isOpen ? 'auto 1fr' : 'auto 0fr',
        transition: 'grid-template-rows 0.3s ease-in-out',
        height: '100%',
      },
    },
    navContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        overflow: 'auto',
        height: '100%',
        gap: '0.8rem',
        padding: '1rem',
        borderRadius: theme.shape.borderRadius,
        flexDirection: 'column',
        alignItems: 'stretch',
        zIndex: 999,
        transitionProperty: 'visibility, opacity, transform ',
        transitionDuration: '0.3s',
        transitionDelay: isOpen ? '0.3s' : '',
        transitionTimingFunction: 'ease-in-out',
        visibility: isOpen ? 'visible' : 'hidden',
        opacity: isOpen ? 1 : 0,
        gridArea: '2 / 1 / span 1 / span 2',
        '::-webkit-scrollbar': {
          width: 0,
        },
      },
    },
  };
});

export default useStyles;
