import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    accordion: {
      background: 'transparent',
      boxShadow: 'none',
      width: '100%',
      padding: '0 !important',
      borderRadius: 0,
      '&::before': {
        height: 0,
      },
    },
  };
});
