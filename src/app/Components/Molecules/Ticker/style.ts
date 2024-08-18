import { makeStyles } from 'tss-react/mui';

type Props = {
  isAr: boolean;
};

export const useStyles = makeStyles<Props>()((theme, props) => {
  const { isAr } = props;
  return {
    container: {
      width: '100%',
      mask: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
      contain: 'inline-size',

      '@keyframes scroll': {
        from: {
          transform: 'translateX(0)',
        },
        to: {
          transform: !isAr ? 'translateX(-100%)' : 'translateX(100%)',
        },
      },
    },
  };
});
