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
    },

    column1: {
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

    column2: {
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
