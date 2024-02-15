import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    link: {
      color: theme.palette.primary.light,
      transition: 'color 0.2s ease-in-out',
      ':hover': {
        color: theme.palette.primary.main,
      },
    },
  };
});
