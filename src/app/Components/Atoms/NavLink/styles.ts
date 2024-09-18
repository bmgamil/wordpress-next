import { handleBorderRadiusSize, handleFontSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

type Props = {
  isFooter?: boolean;
  fontSize: FontSize;
  isProjectCate?: boolean;
};

export const useStyles = makeStyles<Props>()((theme, props) => {
  const { isFooter, fontSize, isProjectCate } = props;
  return {
    link: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      position: 'relative',
      fontSize: handleFontSize(fontSize),
      textTransform: 'capitalize',
      textWrap: 'nowrap',
      whiteSpace: 'nowrap',
      width: isProjectCate ? 'fit-content' : undefined,
      fontWeight: !isFooter
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightLight,

      a: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: theme.palette.text.primary,
        textDecoration: 'none',
        fontWeight: !isFooter
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightLight,
        filter: !isFooter ? 'drop-shadow(0px 0px 6px rgba(0,0,0,0.6))' : '',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: !isFooter ? handleFontSize('lg') : '',
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        position: 'relative',
        borderBottom: !isFooter ? '1px solid' : '',

        a: {
          filter: 'unset',
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

    dropdownMenu: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      // paddingBlock: '0.5rem',
      borderRadius: handleBorderRadiusSize('sm'),
      zIndex: 100,
      // paddingInline: 0,
      padding: 0,
      li: {
        padding: '0.5rem 1rem',

        a: {
          width: '100%',
        },
        p: {
          transition: 'color 0.3s ease-in-out',
        },
      },
      'li:hover': {
        p: {
          color: theme.palette.primary.main,
        },
      },

      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        top: 'calc(100% + 10px) ',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.9)',
        border: '1px solid rgba(255,255,255,0.5)',
      },

      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
  };
});

export default useStyles;
