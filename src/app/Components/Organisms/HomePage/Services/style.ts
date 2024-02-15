import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },

    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
    },

    headingContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
    },

    heading: {
      display: 'flex',
      gap: 5,

      p: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  };
});

export default useStyles;
