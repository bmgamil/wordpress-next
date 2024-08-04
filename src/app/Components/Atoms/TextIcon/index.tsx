'use client';
import { Box, Typography, TypographyProps } from '@mui/material';
import { useStyles } from './style';
// import Icon, { IconName } from '../Icon';

type Props = TypographyProps & {
  hasGradientBG?: boolean;
  hasBgImage?: boolean;
  textSize?: FontSize;
  textWeight?: FontWeight;
  rotateDeg?: number;
  textColor?: TextColor;
  // icon: IconName;
  iconSize?: number | string;
  iconDirection?: 'start' | 'end';
};
const TextIcon = (props: Props) => {
  const {
    children,
    hasGradientBG,
    hasBgImage,
    textWeight,
    textSize,
    rotateDeg,
    textColor,
    // icon,
    iconDirection,
    iconSize,
    ...proprties
  } = props;
  const { classes } = useStyles({
    hasGradientBG,
    hasBgImage,
    textSize,
    textWeight,
    rotateDeg,
    textColor,
  });

  return (
    <Box className={classes.container}>
      <Box
        sx={{
          order: iconDirection === 'end' ? 2 : '',
        }}
      >
        {/* {<Icon name={icon} size={iconSize} />} */}
      </Box>
      <Typography {...proprties} className={classes.text}>
        {children}
      </Typography>
    </Box>
  );
};

export default TextIcon;
