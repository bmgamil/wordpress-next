import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '5px',
      // borderRadius: '10px',
      background: '#F37820',
      transformOrigin: ' 0%',
    },
  };
});
