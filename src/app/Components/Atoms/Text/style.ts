import {
  handleBorderRadiusSize,
  handleFontSize,
  handleFontWeight,
} from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

type Props = {
  hasGradientBG?: boolean;
  hasBgImage?: boolean;
  textSize?: FontSize;
  textWeight?: FontWeight;
  textColor?: TextColor;
  rotateDeg?: number;
  isAr: boolean;
};

export const useStyles = makeStyles<Props>()((theme, props) => {
  const {
    hasGradientBG,
    hasBgImage,
    textWeight,
    textSize,
    textColor,
    rotateDeg,
    isAr,
  } = props;
  return {
    text: {
      width: 'fit-content',
      lineHeight: hasBgImage ? 1.3 : 1.5,
      backgroundImage: hasGradientBG
        ? !isAr
          ? `linear-gradient(90deg, #F37820 30%, #FFFEFD)`
          : `linear-gradient(90deg, #FFFEFD , #F37820 40%)`
        : hasBgImage
        ? 'linear-gradient( rgba(255, 170, 0, 0.3) 100%, rgba(255, 170, 0, 0.3) 100%),url(/image/text-bg.png);'
        : '',

      backgroundSize: hasBgImage ? 'cover' : '',
      backgroundPosition: hasBgImage ? 'center' : '',
      backgroundRepeat: hasBgImage ? 'no-repeat' : '',
      color:
        !hasGradientBG && textColor
          ? theme.palette.primary[textColor]
          : 'inherit',
      transform: rotateDeg ? `rotate(${rotateDeg}deg)` : 'inherit',
      backgroundClip: hasGradientBG ? 'text' : '',
      WebkitTextFillColor: hasGradientBG ? 'transparent' : '',
      fontSize: textSize ? handleFontSize(textSize) : 'inherit',
      fontWeight: textWeight
        ? theme.typography[handleFontWeight(textWeight)]
        : 'inherit',
      padding: hasBgImage ? '0 1.5rem' : '',
      borderRadius: hasBgImage ? handleBorderRadiusSize('lg') : '',

      [theme.breakpoints.down('lg')]: {
        borderRadius: hasBgImage ? handleBorderRadiusSize('md') : '',

        fontSize: textSize
          ? textSize === '3xl'
            ? '2.5rem'
            : handleFontSize(textSize)
          : 'inherit',
      },

      [theme.breakpoints.down('md')]: {
        borderRadius: hasBgImage ? handleBorderRadiusSize('sm') : '',
      },
    },
  };
});
