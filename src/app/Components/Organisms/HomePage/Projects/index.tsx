'use client';

import Text from '@/app/Components/Atoms/Text';
import SectionRoundedTitle from '@/app/Components/Molecules/SectionRoundedTitle';
import { Box } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import useStyles from './style';
import Button from '@/app/Components/Atoms/Button';
import { useRouter } from '@/navigation';

import { MotionDelay, RowVariant } from '@/app/lib/MotionVariants';
import { motion } from 'framer-motion';

const HomeProjects = () => {
  const t = useTranslations('home.projects');
  const bt = useTranslations('buttons');
  const { classes } = useStyles();
  const router = useRouter();

  const navigateToProjects = () => {
    router.push('/blogs' as '/pathnames');
  };

  return (
    <Box className={classes.header}>
      <SectionRoundedTitle
        number={t('number')}
        title={t('title')}
        textColor='light'
      />

      <Text
        textSize='3xl'
        textTransform='capitalize'
        hasGradientBG
        textWeight='medium'
        animate
        delay={MotionDelay.sm}
      >
        {t('heading')}
      </Text>
      <Button
        background='main'
        onClick={() => navigateToProjects()}
        radius='2xl'
        isBold
        component={motion.div}
        variants={RowVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.8 }}
        custom={4}
      >
        {bt('view')}
      </Button>
    </Box>
  );
};

export default HomeProjects;
