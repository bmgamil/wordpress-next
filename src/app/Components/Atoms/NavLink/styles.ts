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
        fontSize: handleFontSize('lg'),
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        position: 'relative',
        borderBottom: !isFooter ? '1px solid' : '',

        a: {
          filter: 'unset',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
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
    icon: {
      svg: {
        fontSize: handleFontSize('xl'),
      },

      [theme.breakpoints.down('md')]: {
        display: isFooter ? 'none' : '',
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  };
});

export default useStyles;
