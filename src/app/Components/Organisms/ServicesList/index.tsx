'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

import { useStyles } from './style';
import { RowVariant } from '@/app/lib/MotionVariants';
import SingleServiceBlog from '../../Molecules/SingleServiceBlog';
import Dropdown from '../../Molecules/Dropdown';
import { useEffect, useState } from 'react';
import { useRouter } from '@/navigation';
import { useParams } from 'next/navigation';

type Props = {
  textSize: FontSize;
  iconSize?: FontSize;
  list: ServiceDetail[] | BlogCategory[];
  isBlog?: boolean;
  hasDropdown?: boolean;
};

const ServicesBlogsList = (props: Props) => {
  const { textSize, iconSize, list, isBlog, hasDropdown } = props;

  const { classes } = useStyles({ hasDropdown });
  const router = useRouter();
  const locale = useLocale();
  const { serviceSlug } = useParams();
  const isAr = locale === 'ar';
  const [currentValue, setCurrentValue] = useState('');

  useEffect(() => {
    if (serviceSlug) {
      const item = list.find((item) => item.slug === serviceSlug);
      if (item) setCurrentValue(item.name);
    }
  }, [serviceSlug]);

  return (
    <>
      {hasDropdown && (
        <Dropdown
          className={classes.dropdown}
          list={list}
          currentValue={currentValue.replace('#038;', '')}
          onChange={(slug, value) => {
            const url: any = `/${isBlog ? 'blogs' : 'service'}/${slug}`;
            setCurrentValue(value);
            router.push(url);
          }}
        />
      )}

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
          const title = item.name;
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
                title={title.replace('amp;', ' ')}
                iconSize={iconSize}
                textSize={textSize}
                isAr={isAr}
              />
            </motion.div>
          );
        })}
      </Box>
    </>
  );
};

export default ServicesBlogsList;
