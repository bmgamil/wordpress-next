import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    listContainer: {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      gap: '0.8rem',
      flexWrap: 'wrap',
      justifyContent: 'center',

      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    skeleton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.grey[200],
    },
  };
});

export default useStyles;
