import { makeStyles } from 'tss-react/mui';

type Props = {
  isAr: boolean;
};

export const useStyles = makeStyles<Props>()((theme, { isAr }) => {
  return {
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      rowGap: '0.8rem',
      [theme.breakpoints.up('md')]: {
        height: '100dvh',
        paddingBlock: '10dvh',
      },
    },

    column1: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '80%',
      'p:first-of-type': {
        lineHeight: 1.1,
      },
      [theme.breakpoints.up('xs')]: {
        alignItems: 'center',
        textAlign: 'center',
      },

      [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        textAlign: 'initial',
      },
    },

    column2: {
      display: 'flex',
      justifyContent: 'flex-end',
      img: {
        transform: isAr ? 'rotateY(180deg)' : '',
      },
      [theme.breakpoints.down('md')]: {
        img: {
          maxWidth: '80%',
          alignItems: 'flex-end',
        },
      },
    },
  };
});

export default useStyles;
