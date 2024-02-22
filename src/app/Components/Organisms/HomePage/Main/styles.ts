import { makeStyles } from 'tss-react/mui';

type Props = {
  isAr: boolean;
  width: number;
};

export const useStyles = makeStyles<Props>()((theme, { isAr, width }) => {
  return {
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      rowGap: '2rem',
      paddingBlock: '10dvh',
      [theme.breakpoints.up('md')]: {
        height: '100dvh',
      },
      [theme.breakpoints.down('md')]: {
        paddingTop: '15dvh',
        paddingBottom: 0,
      },
    },

    column1: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
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
        transform: `${isAr ? 'rotateY(180deg)' : ''} translateX( ${
          width / 2
        }px)`,
      },
      [theme.breakpoints.down('md')]: {
        img: {
          maxWidth: '100%',
          alignItems: 'flex-end',
        },
      },
    },
  };
});

export default useStyles;
