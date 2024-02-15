'use client';

import { Grid } from '@mui/material';
import BlogCard from '../SingleBlog';
import { Blogs } from '@/app/lib/data';
import { RowVariant } from '@/app/lib/MotionVariants';
import { motion } from 'framer-motion';

const BlogsList = () => {
  return (
    <Grid container spacing={2}>
      {Array.from(Array(3)).map((item, i) => {
        return (
          <Grid
            component={motion.div}
            variants={RowVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
            custom={i}
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
          >
            <BlogCard blog={Blogs[0]} key={i} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BlogsList;
