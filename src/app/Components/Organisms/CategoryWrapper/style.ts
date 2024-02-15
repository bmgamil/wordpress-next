import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      paddingTop: '10dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4rem',
      paddingBottom: '2rem',
    },
  };
});
