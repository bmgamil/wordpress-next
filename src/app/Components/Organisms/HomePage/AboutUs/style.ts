import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      gap: '1rem',
      flexDirection: 'column',

      button: {
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },

        [theme.breakpoints.down('md')]: {
          alignSelf: 'center',
        },

        [theme.breakpoints.down('sm')]: {
          alignSelf: 'stretch',
        },
      },
    },
    column1: {
      borderRadius: '24px',
      overflow: 'hidden',

      img: {
        objectFit: 'cover',
        height: '100%',
      },
      [theme.breakpoints.down('md')]: {
        order: 2,
        marginInline: 'auto',
      },

      [theme.breakpoints.between('sm', 'md')]: {
        maxWidth: '40%',
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        maxWidth: '80%',
      },
    },

    column2: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      justifyContent: 'center',
      alignItems: 'flex-start',
      button: {
        display: 'flex',
      },
      [theme.breakpoints.down('md')]: {
        button: {
          display: 'none',
        },
      },
    },
  };
});

export default useStyles;
