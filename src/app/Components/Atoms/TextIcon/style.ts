import { handleFontSize, handleFontWeight } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

type Props = {
  hasGradientBG?: boolean;
  hasBgImage?: boolean;
  textSize?: FontSize;
  textWeight?: FontWeight;
  textColor?: TextColor;
  rotateDeg?: number;
};

export const useStyles = makeStyles<Props>()((theme, props) => {
  const {
    hasGradientBG,
    hasBgImage,
    textWeight,
    textSize,
    textColor,
    rotateDeg,
  } = props;
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
    },
    text: {
      background: hasGradientBG
        ? `linear-gradient(90deg, #F37820, #FFFEFD)`
        : hasBgImage
        ? 'url(/image/text-bg.png) center no-repeat'
        : '',
      backgroundSize: hasBgImage ? 'cover' : '',
      color:
        !hasGradientBG && textColor
          ? theme.palette.primary[textColor]
          : 'inherit',
      transform: rotateDeg ? `rotate(${rotateDeg}deg)` : '',
      backgroundClip: hasGradientBG ? 'text' : '',
      WebkitTextFillColor: hasGradientBG ? 'transparent' : '',
      fontSize: handleFontSize(textSize),
      fontWeight: textWeight
        ? theme.typography[handleFontWeight(textWeight)]
        : '',
      padding: hasBgImage ? '0.3rem 1rem' : '',
      borderRadius: hasBgImage ? theme.shape.borderRadius : '',

      [theme.breakpoints.down('lg')]: {
        fontSize: textSize === '3xl' ? '2.5rem' : handleFontSize(textSize),
      },
    },
  };
});
