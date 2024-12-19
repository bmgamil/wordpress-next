import { makeStyles } from 'tss-react/mui';
type Props = {
  isAr: boolean;
};

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      div: {
        fieldset: {
          border: `1px solid ${theme.palette.grey[400]}`,
          // textAlign: 'start',
        },
        '&:hover fieldset:not(.Mui-focused)': {
          borderColor: `${theme.palette.grey[600]} !important`,
        },
      },
    },
    field: {
      borderRadius: 8,
      overflow: 'hidden',
      color: theme.palette.primary.main,
      // textAlign: 'start',
      '&::placeholder': {
        color: theme.palette.grey[400],
        textTransform: 'capitalize',
      },
    },

    label: {
      color: theme.palette.grey[400],
      // textAlign: 'start',
      // width: '100%',
      // left: 'unset',
      // right: 0,
      // transform: 'translate(-1rem, 9px) scale(1)',
      // '&.Mui-focused': {
      //   transform: 'translate(-0.8rem, -9px) scale(1)',
      //   fontSize: '0.8rem',
      // },
    },

    helperText: {
      textAlign: 'start',
    },
  };
});

export default useStyles;
