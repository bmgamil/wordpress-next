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
      '.rfm-marquee': {
        animation:
          'scroll-to var(--duration) linear var(--delay) var(--iteration-count)',
        animationPlayState: 'var(--play)',
        animationDelay: 'var(--delay)',
        animationDirection: 'var(--direction)',
        '@keyframes scroll-to': {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: !isAr ? 'translateX(-100%)' : 'translateX(100%)',
          },
        },
      },
    },
  };
});
