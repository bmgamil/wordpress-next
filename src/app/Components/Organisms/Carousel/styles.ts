import { getSlideWidth } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<{ listLength: number }>()(
  (theme, { listLength }) => {
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',

        '.embla': {
          overflow: 'hidden',
        },
        '.embla__container': {
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: getSlideWidth(listLength),
          gap: '1rem',
        },
        '.embla__slide': {
          minWidth: 0,
        },
        '.embla__slide:last-of-type': {
          marginInlineEnd: '1rem',
        },

        [theme.breakpoints.down('md')]: {
          '.embla__container': {
            gridAutoColumns:
              listLength > 1
                ? 'calc(100% / 2 - 1rem)'
                : getSlideWidth(listLength),
          },
        },
        [theme.breakpoints.down('sm')]: {
          '.embla__container': {
            gridAutoColumns: 'calc(100% - 1rem)',
          },
        },
      },

      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        textTransform: 'capitalize',
      },

      buttons: {
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',

        button: {
          height: '2.5rem',
          width: '2.5rem',
          padding: 0,
          ':disabled': {
            color: theme.palette.grey[500],
            borderColor: theme.palette.grey[500],
          },
        },
      },
    };
  }
);

export default useStyles;
