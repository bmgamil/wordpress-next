import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '5rem',
    },
    title: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '2.5rem',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'stretch',
        textAlign: 'center',
        gap: '1.5rem',
      },
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignSelf: 'flex-start',
    },
    sectionList: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'flex-start',
      gap: '0.5rem',
      padding: 0,
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        'li, p': {
          fontSize: '1rem',
        },
      },
    },
  };
});

export default useStyles;
