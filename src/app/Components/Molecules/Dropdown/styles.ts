import { handleBorderRadiusSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

type Props = {
  isOpen: boolean;
};

export const useStyles = makeStyles<Props>()((theme, props) => {
  const { isOpen } = props;
  return {
    container: {
      // width: 'minmax(fit-content, 100%)',
      borderBottom: `1px ${theme.palette.primary.light} solid`,
      position: 'relative',
      zIndex: 10,
      '*': { userSelect: 'none' },
    },

    header: {
      width: '100%',

      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      paddingBlock: '0.5rem',
      cursor: 'pointer',
    },

    icon: {
      transition: 'transform 0.3s ease-in-out',
      transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
      color: theme.palette.primary.light,
    },

    list: {
      position: 'absolute',
      top: 'calc(100% + 10px)',
      left: 0,
      width: '100%',

      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgba(0,0,0,0.9)',
      paddingBlock: '0.5rem',
      borderRadius: handleBorderRadiusSize('sm'),
      border: '1px solid rgba(255,255,255,0.5)',
      zIndex: 10,
    },

    listItem: {
      color: theme.palette.primary.light,
      paddingInline: '0.5rem',
      transitionProperty: 'color , background-color',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-in-out',
      cursor: 'pointer',
      borderRadius: '0.5rem',
      textTransform: 'capitalize',
      fontSize: '1.2rem',
      '&:hover': {
        color: theme.palette.primary.main,
        // color: theme.palette.primary.dark,
      },

      '&.active': {
        color: theme.palette.primary.main,
      },
    },
  };
});
