'use client';

import { useStyles } from './style';
import { Box } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    duration: 0.3,
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const { classes } = useStyles();
  return (
    <Box
      component={motion.div}
      style={{ scaleX }}
      className={classes.container}
    />
  );
};

export default ScrollBar;
