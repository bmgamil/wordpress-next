'use client';

import { Box, List, ListItem } from '@mui/material';
import SearchInput from '../../Molecules/SearchInput';
import { AnimatePresence, motion } from 'framer-motion';
import { RowVariant } from '@/app/lib/MotionVariants';
import { FormEvent, useEffect, useState } from 'react';
import { API_URL } from '@/app/lib/Controller';
import useStyles from './style';
import { Link } from '@/navigation';

const BlogSearch = () => {
  const [value, setValue] = useState('');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const { classes } = useStyles();
  const timeout = 1000;
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    timeoutId && clearTimeout(timeoutId);
    setTimeoutId(setTimeout(onSubmit, timeout)); // Delay search by 1.5 seconds
  };

  const onSubmit = async (signal?: AbortSignal) => {
    if (value.trim().length > 2) {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/search-blog?search=${value}`, {
          signal,
        });
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else if (value.trim().length === 0) {
      setBlogs([]);
    }
  };

  useEffect(() => {
    // Cancel any pending fetch when value changes
    const controller = new AbortController();
    timeoutId && clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => onSubmit(controller.signal), timeout));
    return () => controller.abort();
  }, [value]);

  return (
    <Box component='form' onSubmit={handleSearch} className={classes.container}>
      <SearchInput setValue={setValue} value={value} isLoading={loading} />
      <AnimatePresence>
        {!!blogs.length && (
          <List
            className={classes.dropdown}
            component={motion.ul}
            variants={RowVariant}
            initial='hidden'
            whileInView='visible'
            exit='exit'
            viewport={{ once: true, amount: 0.8 }}
          >
            {blogs.map((blog) => {
              return (
                <ListItem key={blog.id} className={classes.li}>
                  <Link href={`/blog/${blog.slug}` as any}>{blog.title}</Link>
                </ListItem>
              );
            })}
          </List>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default BlogSearch;
