'use client';

import { Box, Skeleton } from '@mui/material';
import { useStyles } from './style';
import { motion } from 'framer-motion';
import { RowVariant } from '@/app/lib/MotionVariants';

const ServiceSkeleton = () => {
  const { classes } = useStyles();
  return (
    <Box
      component={motion.div}
      className={classes.container}
      variants={RowVariant}
      initial='hidden'
      animate='visible'
    >
      <Skeleton
        variant='text'
        height={40}
        sx={{ borderRadius: '0.5rem', width: { xs: 100, sm: 150, md: 350 } }}
      />
      <Skeleton
        variant='rectangular'
        width={'100%'}
        sx={{ borderRadius: '1rem', height: { xs: 250, md: 600 } }}
      />

      <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} />
      <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} />
      <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} />
      <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} />
      <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} />
      <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} />
    </Box>
  );
};

export default ServiceSkeleton;
