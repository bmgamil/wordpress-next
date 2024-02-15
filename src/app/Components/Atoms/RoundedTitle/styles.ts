import { handleBorderRadiusSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

type Props = {
  radius: BorderRadius;
  textColor: TextColor;
};

export const useStyles = makeStyles<Props>()((theme, props) => {
  const { radius, textColor } = props;
  return {
    container: {
      padding: radius === 'full' ? '0.5rem' : '0.3rem 1rem',
      width: radius === 'full' ? '2.5rem' : '',
      height: '2.5rem',
      borderRadius: handleBorderRadiusSize(radius),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: textColor !== 'main' ? 'transparent' : '#fff',
      textTransform: 'capitalize',
      border:
        textColor !== 'main'
          ? `1px solid ${theme.palette.primary[textColor]}`
          : '',
    },
  };
});

export default useStyles;
