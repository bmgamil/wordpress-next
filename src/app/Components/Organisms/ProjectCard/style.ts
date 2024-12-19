import { handleBorderRadiusSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '1rem',
      padding: '2rem',
      borderRadius: handleBorderRadiusSize('xl'),
      height: '100%',
      userSelect: 'none',
      background: `linear-gradient(90deg, ${theme.palette.background.paper} ,  ${theme.palette.grey[900]} , ${theme.palette.grey[800]})`,
    },
    link: {
      alignSelf: 'flex-start',
      filter: `drop-shadow(0px 0px 6px rgba(0,0,0,0.6))`,
      svg: {
        filter: `drop-shadow(0px 0px 6px rgba(0,0,0,0.6))`,
      },
    },

    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      textTransform: 'capitalize',
      a: {
        color: theme.palette.primary.light,
        textDecoration: 'none',
      },
      h4: {
        width: '100%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        filter: `drop-shadow(0px 0px 6px rgba(0,0,0,0.4))`,

        [theme.breakpoints.down('sm')]: {
          whiteSpace: 'wrap',
        },
      },
    },

    image: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignSelf: 'stretch',
      flexGrow: 1,
      img: {
        objectFit: 'contain',
        width: '100%',
        maxWidth: '300px',
        filter: `drop-shadow(0px 0px 6px rgba(0,0,0,0.4))`,
      },
    },
  };
});
