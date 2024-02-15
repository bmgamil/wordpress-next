'use client';

import { Grid } from '@mui/material';
import BlogCard from '../../SingleBlog';
import { Blogs } from '@/app/lib/data';
import { motion } from 'framer-motion';
import { RowVariant } from '@/app/lib/MotionVariants';

const BlogsList = () => {
  return (
    <Grid container spacing={2}>
      {Blogs.map((blog, i) => {
        if (i === 0) {
          return (
            <Grid
              component={motion.div}
              variants={RowVariant}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.8 }}
              // custom={i}
              item
              xs={12}
              key={blog.id}
            >
              <BlogCard blog={blog} />
            </Grid>
          );
        } else {
          return (
            <Grid
              component={motion.div}
              variants={RowVariant}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.8 }}
              item
              xs={12}
              md={6}
              key={blog.id}
            >
              <BlogCard blog={blog} />
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

export default BlogsList;
