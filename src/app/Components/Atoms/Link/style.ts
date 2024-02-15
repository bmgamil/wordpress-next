import { handleBorderRadiusSize, handleFontSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      gap: '0.5rem',
      textTransform: 'capitalize',
      textWrap: 'nowrap',
      whiteSpace: 'nowrap',
      color: theme.palette.primary.light,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: handleFontSize('base'),
    },
  };
});

export default useStyles;
