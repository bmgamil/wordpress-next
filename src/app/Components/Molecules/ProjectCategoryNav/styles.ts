import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    listContainer: {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      gap: '0.8rem',
      width: 'fit-content',
      flexWrap: 'wrap',
      justifyContent: 'center',

      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },

    dropdown: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  };
});

export default useStyles;
