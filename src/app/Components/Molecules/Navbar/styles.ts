import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',

      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
  };
});

export default useStyles;
