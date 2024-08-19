'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

import { useStyles } from './style';
import { RowVariant } from '@/app/lib/MotionVariants';
import SingleServiceBlog from '../../Molecules/SingleServiceBlog';

type Props = {
  textSize: FontSize;
  iconSize?: FontSize;
  list: ServiceDetail[] | BlogCategory[];
  isBlog?: boolean;
};

const ServicesBlogsList = (props: Props) => {
  const { textSize, iconSize, list, isBlog } = props;
  const { classes } = useStyles();
  const locale = useLocale();
  const isAr = locale === 'ar';
  return (
    <Box className={classes.container}>
      {isBlog && (
        <motion.div
          variants={RowVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
          custom={0}
          transition={{
            duration: 0.3,
          }}
        >
          <SingleServiceBlog
            href={`/blogs`}
            title='all'
            iconSize={iconSize}
            textSize={textSize}
            isAr={isAr}
          />
        </motion.div>
      )}

      {list?.map((item, i) => {
        const title = item.name || item.title;
        return (
          <motion.div
            variants={RowVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
            custom={i + 1}
            transition={{
              duration: 0.3,
            }}
            key={title}
          >
            <SingleServiceBlog
              href={`/${isBlog ? 'blogs' : 'service'}/${item.slug}`}
              title={title.replace('#038;', '')}
              iconSize={iconSize}
              textSize={textSize}
              isAr={isAr}
            />
          </motion.div>
        );
      })}
    </Box>
  );
};

export default ServicesBlogsList;
