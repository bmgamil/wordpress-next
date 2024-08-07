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
  isBlog?: boolean;
  clearDrag?: boolean;
};

const TagsSlider = (props: Props) => {
  const { tags, mode, isBlog, clearDrag } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const { classes } = useStyles({ clearDrag });
  const locale = useLocale();
  const isAr = locale === 'ar';

  useEffect(() => {
    if (!clearDrag) {
      const scrollWidth = containerRef.current?.scrollWidth;
      const clientWidth = containerRef.current?.clientWidth;
      if (clientWidth && scrollWidth) setWidth(clientWidth - scrollWidth);
    }
  }, [clearDrag]);
  return (
    <Box
      className={classes.container}
      component={motion.div}
      ref={containerRef}
      whileTap={{ cursor: clearDrag ? 'auto' : 'grabbing' }}
    >
      <Box
        drag={clearDrag ? !clearDrag : 'x'}
        dragConstraints={
          !clearDrag
            ? {
                right: isAr ? -width : 0,
                left: isAr ? 0 : width,
              }
            : false
        }
        component={motion.div}
        className={classes.innerContainer}
      >
        {tags.map((tag, i) => {
          const { id, name, slug, title } = tag;
          return (
            <Tag
              href={isBlog ? undefined : `/projects?category=${slug}`}
              mode={mode}
              key={id ?? i}
            >
              {name?.replace('&amp;', '')}
              {title?.replace('&amp;', '')}
            </Tag>
          );
        })}
      </Box>
    </Box>
  );
};

export default TagsSlider;
