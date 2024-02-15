import {
  handleBorderRadiusSize,
  handleFontSize,
  handleFontWeight,
} from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },

    Title: {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },

    Image: {
      borderRadius: handleBorderRadiusSize('lg'),
      overflow: 'clip',
      display: 'flex',
      img: {
        objectFit: 'cover',
        width: '100%',
      },
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      '> * ': {
        margin: 0,
        padding: 0,
      },
      h3: {
        paddingInlineStart: '1.25rem',
        borderInlineStart: `5px solid ${theme.palette.primary.light} `,
        fontSize: handleFontSize('xl'),
        fontWeight: theme.typography.fontWeightMedium,
      },
      h4: {
        fontSize: handleFontSize('lg'),
        fontWeight: theme.typography.fontWeightRegular,
      },

      'h4,h3': {
        textTransform: 'capitalize',
      },

      p: {
        fontSize: handleFontSize('base'),
        '&::first-letter': {
          textTransform: 'capitalize',
        },
      },

      ul: {
        listStyle: 'none',
      },
    },
  };
});

export default useStyles;
