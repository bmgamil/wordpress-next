import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      paddingBlock: '0.5rem',
      transitionProperty: 'color, border',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-in-out',
      color: theme.palette.primary.light,
      borderBottom: `1px solid ${theme.palette.primary.light} `,
      cursor: 'pointer',
      textDecoration: 'none',

      ':hover, &.active': {
        color: theme.palette.primary.main,
        borderBottom: `1px solid ${theme.palette.primary.main} `,
      },

      [theme.breakpoints.down('md')]: {
        p: {
          fontSize: '1.5rem',
          textWrap: 'balance',
        },
      },
    },
  };
});
