import { handleBorderRadiusSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      paddingTop: '20dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
    },
    image: {
      borderRadius: handleBorderRadiusSize('xl'),
      overflow: 'hidden',
      display: 'flex',
      height: '50dvh',
      width: '100%',
      img: {
        width: '100%',
        objectPosition: 'top',
        objectFit: 'cover',
        transition: 'object-position 10s ease-in-out',
      },

      '&:hover': {
        img: {
          objectPosition: 'bottom',
        },
      },
    },
  };
});
