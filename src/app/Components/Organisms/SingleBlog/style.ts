import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',

      button: {
        alignSelf: 'flex-start',
        paddingLeft: '0',
      },
    },
    image: {
      borderRadius: theme.shape.borderRadius,
      overflow: 'hidden',
      display: 'flex',
      mask: 'linear-gradient(to top, transparent, white 50%)',
      img: {
        objectFit: 'cover',
        width: '100%',
      },
    },
  };
});
