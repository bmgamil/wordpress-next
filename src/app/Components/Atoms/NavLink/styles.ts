import { handleFontSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

type Props = {
  isFooter?: boolean;
  fontSize: FontSize;
};

export const useStyles = makeStyles<Props>()((theme, props) => {
  const { isFooter, fontSize } = props;
  return {
    link: {
      fontSize: handleFontSize(fontSize),
      textTransform: 'capitalize',
      textWrap: 'nowrap',
      whiteSpace: 'nowrap',
      fontWeight: !isFooter
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightLight,

      a: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
        fontWeight: !isFooter
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightLight,
        filter: !isFooter ? 'drop-shadow(0px 0px 6px rgba(0,0,0,0.6))' : '',
      },
      [theme.breakpoints.down('md')]: {
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        justifyContent: 'center',
        position: 'relative',
        width: 'fit-content',
        '&::after': {
          content: "''",
          position: 'absolute',
          bottom: -2,
          left: '5%',
          width: '90%',
          height: 3,
          transform: 'scaleX(0)',
          transitionProperty: 'transform',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'ease-in-out',
          background: '#fff',
          borderRadius: 4,
        },
        a: {
          filter: 'unset',
        },
        '&:hover': {
          transform: 'scale(1.1) ',
          '&::after': {
            transform: 'scaleX(1) ',
          },
        },
      },
    },
    text: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',

      fontSize: 'inherit',
      fontWeight: 'inherit',
      textWrap: isFooter ? 'wrap' : 'nowrap',
      whiteSpace: isFooter ? 'wrap' : 'nowrap',
    },
  };
});

export default useStyles;
