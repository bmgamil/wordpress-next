import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      textTransform: 'capitalize',
    },

    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
  };
});

export default useStyles;
