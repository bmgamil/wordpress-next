import { Variants } from 'framer-motion';

export const RowVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1,
    },
  }),
  exit: { opacity: 0, y: 10 },
};

export const AccordionVariant: Variants = {
  open: {
    opacity: 1,
    height: 'auto',
  },
  collapsed: {
    opacity: 0,
    height: 0,
  },
};

export const FadeInVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const MotionDelay = {
  xs: 0.3,
  sm: 0.6,
  md: 0.9,
  lg: 1.2,
  xl: 1.5,
};

export const PathVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      duration: i * 0.2,
      ease: 'easeInOut',
    },
  }),
};

export const svgVariants: Variants = {
  hidden: {
    scale: 0.9,
    rotate: 0,
  },
  visible: {
    scale: 1.1,
    rotate: 90,
    transition: {
      repeatType: 'reverse',
      repeat: Infinity,
      ease: 'anticipate',
      duration: 1,
      delay: 1,
    },
  },
};
