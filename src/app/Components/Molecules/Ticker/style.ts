import { makeStyles } from 'tss-react/mui';

type Props = {
  isAr: boolean;
};

export const useStyles = makeStyles<Props>()((theme, props) => {
  const { isAr } = props;
  return {
    container: {
      width: '100%',
      overflow: 'hidden',
      mask: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
    },
    innerContainer: {
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '3rem',
      padding: 0,
      animation: 'ticker 15s infinite linear',
      contain: 'inline-size',
      '@keyframes ticker': {
        from: {
          transform: 'translateX(0)',
        },
        to: {
          transform: !isAr
            ? 'translateX(calc(-50% - 1.5rem))'
            : 'translateX(calc(50% + 1.5rem))',
        },
      },
      li: {
        img: {
          width: 150,
          maxWidth: 'unset',

          [theme.breakpoints.down('sm')]: {
            width: 100,
          },
        },
      },
    },
  };
});
