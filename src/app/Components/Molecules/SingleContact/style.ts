import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    link: {
      color: theme.palette.primary.light,
      textDecoration: 'none',
      width: 'fit-content',
    },
  };
});
