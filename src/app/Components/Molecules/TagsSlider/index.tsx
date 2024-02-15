'use client';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Tag from '../../Atoms/Tag';
import { useStyles } from './style';
import { useLocale } from 'next-intl';

type Props = {
  tags: ProjectCategory[];
  mode: 'light' | 'dark';
};

const TagsSlider = (props: Props) => {
  const { tags, mode } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const { classes } = useStyles();
  const locale = useLocale();
  const isAr = locale === 'ar';

  useEffect(() => {
    const scrollWidth = containerRef.current?.scrollWidth;
    const clientWidth = containerRef.current?.clientWidth;
    if (clientWidth && scrollWidth) setWidth(clientWidth - scrollWidth);
  }, []);

  return (
    <Box
      className={classes.container}
      component={motion.div}
      ref={containerRef}
      whileTap={{ cursor: 'grabbing' }}
    >
      <Box
        drag='x'
        dragConstraints={{
          right: isAr ? -width : 0,
          left: isAr ? 0 : width,
        }}
        component={motion.div}
        className={classes.innerContainer}
      >
        {tags.map((tag, i) => {
          const { id, name, slug } = tag;
          return (
            <Tag href={`/categories/${slug}`} mode={mode} key={id ?? i}>
              {name.replace('&amp;', '')}
            </Tag>
          );
        })}
      </Box>
    </Box>
  );
};

export default TagsSlider;
