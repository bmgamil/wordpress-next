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

      backgroundColor: theme.palette.primary.dark,
      paddingBlock: '1rem',
      zIndex: 10,
      borderRadius: '1rem',

      border: '1px solid',
    },

    listItem: {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.primary.dark,
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
