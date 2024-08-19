import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme, props) => {
  return {
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      justifyContent: 'space-between',
      width: '100%',

      img: {
        width: 25,
        height: 17,
      },
    },
  };
});
