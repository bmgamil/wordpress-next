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
  list: ServiceDetail[];
  isBlog?: boolean;
};

const ServicesBlogsList = (props: Props) => {
  const { textSize, iconSize, list, isBlog } = props;
  const { classes } = useStyles();
  const locale = useLocale();
  const isAr = locale === 'ar';

  return (
    <Box className={classes.container}>
      {list.map((service, i) => (
        <motion.div
          variants={RowVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
          custom={i}
          transition={{
            duration: 0.3,
          }}
          key={service.title}
        >
          <SingleServiceBlog
            href={`/service/${service.slug}`}
            title={service.title.replace('#038;', '')}
            iconSize={iconSize}
            textSize={textSize}
            isAr={isAr}
          />
        </motion.div>
      ))}
    </Box>
  );
};

export default ServicesBlogsList;
