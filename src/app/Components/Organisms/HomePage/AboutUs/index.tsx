'use client';
import { motion } from 'framer-motion';
import { Box, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';

import useStyles from './style';
import Button from '@/app/Components/Atoms/Button';
import Image from '@/app/Components/Atoms/Image';
import Text from '@/app/Components/Atoms/Text';
import HomeAbout from '@/../public/image/home-about.jpg';
import SectionRoundedTitle from '@/app/Components/Molecules/SectionRoundedTitle';
import { MotionDelay, RowVariant } from '@/app/lib/MotionVariants';

const HomeAboutUs = () => {
  const { classes } = useStyles();
  const t = useTranslations('home.about');
  const bt = useTranslations('buttons');
  return (
    <Box className={classes.container} component={motion.section}>
      <Grid container justifyContent='space-between' rowGap={3}>
        <Grid
          item
          md={4}
          className={classes.column1}
          component={motion.div}
          variants={RowVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
          custom={2}
        >
          <Image src={HomeAbout} alt={t('title')} placeholder='blur' />
        </Grid>
        <Grid item md={7} className={classes.column2}>
          <SectionRoundedTitle
            number={t('number')}
            title={t('title')}
            textColor='light'
          />
          <Box display='flex' alignItems='center' columnGap={1} flexWrap='wrap'>
            <Text
              textWeight='medium'
              textSize='3xl'
              textTransform='capitalize'
              animate
              delay={MotionDelay.xs}
            >
              {t('heading_1')}
            </Text>
            <Text
              hasGradientBG
              textWeight='medium'
              textSize='3xl'
              textTransform='capitalize'
              animate
              delay={MotionDelay.md}
            >
              {t('heading_2')}
            </Text>
          </Box>
          <Text
            textWeight='regular'
            textSize='base'
            textTransform='capitalize'
            animate
            delay={MotionDelay.lg}
          >
            {t('description')}
          </Text>

          <Button
            variants={RowVariant}
            whileInView='visible'
            initial='hidden'
            custom={5}
            viewport={{ once: true, amount: 0.8 }}
            background='main'
            radius='2xl'
            isBold
          >
            {bt('explore')}
          </Button>
        </Grid>
      </Grid>
      <Button background='main' radius='2xl' isBold>
        {bt('explore')}
      </Button>
    </Box>
  );
};

export default HomeAboutUs;
