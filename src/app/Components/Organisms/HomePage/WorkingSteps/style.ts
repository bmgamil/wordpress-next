import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      background: theme.palette.primary.light,
      borderRadius: '3rem',
      padding: '1.5rem',

      '& button': {
        alignSelf: 'center',
        [theme.breakpoints.down('sm')]: {
          alignSelf: 'stretch',
        },
      },
    },

    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    },

    heading: {
      display: 'flex',
      gap: 5,

      p: {
        fontWeight: theme.typography.fontWeightMedium,
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },

    column2: {
      borderRadius: '24px',
      overflow: 'hidden',
      img: {
        objectFit: 'cover',
        height: '100%',
      },
      [theme.breakpoints.down('md')]: {
        order: 1,
        marginInline: 'auto',
      },

      [theme.breakpoints.between('sm', 'md')]: {
        maxWidth: '40%',
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        maxWidth: '80%',
      },
    },

    column1: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'flex-start',
      [theme.breakpoints.down('md')]: {
        order: 2,
      },
    },
  };
});

export default useStyles;
