'use client';

import { useLocale } from 'next-intl';
import { MotionProps, motion } from 'framer-motion';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import { Button as MUIButton, ButtonProps } from '@mui/material/';

import { useStyles } from './styles';

type Props = ButtonProps &
  MotionProps & {
    children?: React.ReactNode | string;
    background?: BGColor;
    radius?: BorderRadius;
    textColor?: TextColor;
    fontSize?: FontSize;
    type?: ButtonType;
    isBold?: boolean;
    iconSize?: FontSize;
    textTransform?: TextTransform;
    full?: boolean;
  };

const Button = (props: Props) => {
  const {
    background,
    children,
    radius,
    textColor: color,
    fontSize,
    type,
    isBold,
    textTransform,
    iconSize,
    full,
    ...properties
  } = props;

  const locale = useLocale();
  const isAr = locale === 'ar';

  const { classes } = useStyles({
    background,
    radius,
    color,
    fontSize,
    isBold,
    textTransform,
    isAr,
    full,
  });
  const _type: ButtonType = type ?? 'button';

  return (
    <MUIButton
      component={motion.button}
      className={classes.btn}
      type={_type}
      endIcon={
        !isAr ? (
          <NorthEastIcon fontSize='small' />
        ) : (
          <NorthWestIcon fontSize='small' />
        )
      }
      {...properties}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
