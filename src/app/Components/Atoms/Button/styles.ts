import { handleBorderRadiusSize, handleFontSize } from '@/app/lib/handlers';
import { makeStyles } from 'tss-react/mui';

type Props = {
  background?: BGColor;
  radius?: BorderRadius;
  color?: TextColor;
  fontSize?: FontSize;
  isBold?: boolean;
  textTransform?: TextTransform;
  isAr?: boolean;
  full?: boolean;
};
export const useStyles = makeStyles<Props>()((theme, props) => {
  const {
    background,
    color,
    fontSize,
    isBold,
    radius,
    textTransform,
    isAr,
    full,
  } = props;

  const isFull = full ? { width: '100%', height: '100%' } : {};

  return {
    btn: {
      minWidth: 'unset',
      textTransform: textTransform ?? 'capitalize',
      fontWeight: isBold
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
      fontSize: handleFontSize(fontSize) ?? '0.8rem',
      borderRadius: handleBorderRadiusSize(radius),
      backgroundColor: background
        ? theme.palette.primary[background]
        : 'transparent',
      color: color ? theme.palette.primary[color] : theme.palette.text.primary,
      padding: '0.7rem 1.5rem',
      border: color ? `1px solid ${theme.palette.primary[color]}` : '',
      '&:hover': {
        backgroundColor: background
          ? theme.palette.primary.contrastText
          : 'transparent',
        color: background
          ? theme.palette.primary.light
          : color
          ? theme.palette.primary[color]
          : theme.palette.primary.light,
        boxShadow: background || color ? theme.shadows[2] : '',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
      },
      gap: 8,
      ...isFull,
      span: {
        marginLeft: 0,
        marginRight: 0,
      },
    },

    svg: {
      color: (color ? theme.palette.primary[color] : 'white') + ' !important',
      transform: isAr ? 'rotateY(180deg)' : '',

      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
      },
    },
  };
});

export default useStyles;
