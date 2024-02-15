'use client';
import { motion } from 'framer-motion';
import { Box, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';

import useStyles from './style';
import Image from '@/app/Components/Atoms/Image';
import IntroductionList from '../../IntroductionList';
import { FadeInVariant } from '@/app/lib/MotionVariants';
import AboutIntroduction from '@/../public/image/about-introduction.jpg';

const Introduction = () => {
  const t = useTranslations('about.introduction');

  const { classes } = useStyles();
  return (
    <Box className={classes.container} component='section'>
      <Grid container justifyContent='space-between' rowGap={3}>
        <Grid
          item
          md={4}
          className={classes.column1}
          component={motion.div}
          variants={FadeInVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
        >
          <Image src={AboutIntroduction} alt={t('imgAlt')} placeholder='blur' />
        </Grid>

        <Grid item md={7} className={classes.column2}>
          <IntroductionList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
