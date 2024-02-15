'use client';
import { inView, motion, useAnimation, useInView } from 'framer-motion';
import { useStyles } from './style';
import { Box, Typography, TypographyProps } from '@mui/material';
import { useEffect, useRef } from 'react';
import { RowVariant } from '@/app/lib/MotionVariants';
import { useLocale } from 'next-intl';

type Props = TypographyProps & {
  hasGradientBG?: boolean;
  hasBgImage?: boolean;
  textSize?: FontSize;
  textWeight?: FontWeight;
  rotateDeg?: number;
  textColor?: TextColor;
  children?: React.ReactNode;
  animate?: boolean;
  delay?: number;
};
const Text = (props: Props) => {
  const {
    children,
    hasGradientBG,
    hasBgImage,
    textWeight,
    textSize,
    rotateDeg,
    textColor,
    animate,
    delay,
    ...proprties
  } = props;
  const locale = useLocale();
  const isAr = locale === 'ar';

  const { classes } = useStyles({
    hasGradientBG,
    hasBgImage,
    textSize,
    textWeight,
    rotateDeg,
    textColor,
    isAr,
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (animate && ref && ref.current && isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          delay: delay ?? 0,
          duration: 1,
        },
      });
    }
  }, [animate, delay, ref, isInView]);

  return (
    <Box
      ref={ref}
      component={motion.div}
      variants={animate ? RowVariant : undefined}
      initial='hidden'
      animate={controls}
    >
      <Typography className={classes.text} {...proprties}>
        {children}
      </Typography>
    </Box>
  );
};

export default Text;
