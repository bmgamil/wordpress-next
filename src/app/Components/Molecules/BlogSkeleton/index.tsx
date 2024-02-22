'use client';

import { Box, Skeleton } from '@mui/material';
import { useStyles } from './style';
import { motion } from 'framer-motion';
import { RowVariant } from '@/app/lib/MotionVariants';

const BlogSkeleton = ({ index }: { index: number }) => {
  const { classes } = useStyles();
  return (
    <Box
      component={motion.div}
      className={classes.container}
      variants={RowVariant}
      initial='hidden'
      animate='visible'
      custom={index}
    >
      <Skeleton
        variant='rectangular'
        height={250}
        width={'100%'}
        sx={{ borderRadius: '1rem' }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Skeleton
          variant='rectangular'
          height={30}
          sx={{ borderRadius: '1rem', width: { xs: 50, sm: 90, md: 150 } }}
        />
        <Skeleton
          variant='rectangular'
          height={30}
          sx={{ borderRadius: '1rem', width: { xs: 50, sm: 90, md: 150 } }}
        />
        <Skeleton
          variant='rectangular'
          height={30}
          sx={{ borderRadius: '1rem', width: { xs: 50, sm: 90, md: 150 } }}
        />
      </Box>
      <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} />

      <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} width={100} />
    </Box>
  );
};

export default BlogSkeleton;
