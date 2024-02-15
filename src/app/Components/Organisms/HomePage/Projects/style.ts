import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      alignItems: 'flex-start',
    },
  };
});

export default useStyles;
