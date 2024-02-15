'use client';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';

import useStyles from './style';
import BlogsList from '../../BlogsList';
import Text from '@/app/Components/Atoms/Text';
import Button from '@/app/Components/Atoms/Button';
import SectionRoundedTitle from '@/app/Components/Molecules/SectionRoundedTitle';
import { RowVariant } from '@/app/lib/MotionVariants';
import Pagination from '@/app/Components/Molecules/Pagination';

const Blogs = () => {
  const t = useTranslations('home.blogs');
  const bt = useTranslations('buttons');
  const { classes } = useStyles();
  const router = useRouter();

  const navigateToBlogs = () => {
    router.push('/blogs' as '/pathnames');
  };

  return (
    <Box className={classes.container} component='section'>
      <Box className={classes.header}>
        <SectionRoundedTitle
          number={t('number')}
          title={t('title')}
          textColor='light'
        />
        <Box
          className={classes.headingContainer}
          component={motion.div}
          variants={RowVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
        >
          <Box className={classes.heading}>
            <Text textSize='3xl' textTransform='capitalize'>
              {t('heading_1')}
            </Text>
            <Text textSize='3xl' hasGradientBG>
              {t('heading_2')}
            </Text>
          </Box>
        </Box>
      </Box>
      <BlogsList />
      <Button
        background='main'
        onClick={() => navigateToBlogs()}
        radius='2xl'
        isBold
      >
        {bt('view')}
      </Button>
    </Box>
  );
};

export default Blogs;
