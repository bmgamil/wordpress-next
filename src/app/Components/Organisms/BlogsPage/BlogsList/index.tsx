'use client';

import { Grid } from '@mui/material';
import BlogCard from '../../SingleBlog';
import { Blogs } from '@/app/lib/data';
import { motion } from 'framer-motion';
import { RowVariant } from '@/app/lib/MotionVariants';
import Pagination from '@/app/Components/Molecules/Pagination';
import { useRouter } from '@/navigation';
import { useEffect, useState } from 'react';
import LoadingCircular from '@/app/Components/Molecules/Loading/LoadingCircular';
import BlogSkeleton from '@/app/Components/Molecules/BlogSkeleton';

type Props = {
  list: Blog[];
  total: number;
  currentPage: number;
  path: string;
};

const BlogsList = (props: Props) => {
  const { list, total, currentPage, path } = props;
  const router = useRouter();

  const [pageNumber, setPageNumber] = useState(currentPage ?? 0);
  const [loading, setLoading] = useState(false);

  const handlePagination = (value: number) => {
    setPageNumber((prev) => value);
    setLoading(true);
    router.push(`${path}?page=${value}` as any, { scroll: true });
  };

  useEffect(() => {
    setLoading(false);
  }, [currentPage]);

  return (
    <Grid container spacing={2} sx={{ height: '100%' }}>
      {loading
        ? Array.from(Array(3)).map((_item, i) => {
            return (
              <Grid key={i} item xs={12} md={i === 0 ? undefined : 6}>
                <BlogSkeleton index={i} />
              </Grid>
            );
          })
        : list.map((blog, i) => {
            if (i === 0) {
              return (
                <Grid
                  component={motion.div}
                  variants={RowVariant}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.8 }}
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
      {total > 1 && (
        <Grid
          item
          xs={12}
          display='flex'
          justifyContent='center'
          alignSelf='flex-end'
        >
          <Pagination
            currentPage={pageNumber}
            total={total}
            handleChange={handlePagination}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default BlogsList;
