import { handleBorderRadiusSize, handleFontSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      position: 'relative',
      width: 'fit-content',
      paddingBlock: '0.5rem',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '100%',
      borderRadius: handleBorderRadiusSize('md'),
      background: theme.palette.background.default,
      padding: '0.5rem',
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: theme.shadows[4],
      minHeight: 200,
      maxHeight: 300,
      overflow: 'auto',
    },

    li: {
      paddingBlock: '10px',
      borderBottom: '1px solid',
      a: {
        color: theme.palette.primary.light,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontSize: handleFontSize('sm'),
      },
    },
  };
});

export default useStyles;
