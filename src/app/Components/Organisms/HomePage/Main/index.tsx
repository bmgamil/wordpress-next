'use client';

import { motion } from 'framer-motion';
import { Container, Grid } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';

import HomeMainBG from '@/../public/image/home-main-bg.png';
import Button from '@/app/Components/Atoms/Button';
import Image from '@/app/Components/Atoms/Image';
import Text from '@/app/Components/Atoms/Text';
import { FadeInVariant, RowVariant } from '@/app/lib/MotionVariants';
import useStyles from './styles';

const HomeMain = () => {
  const t = useTranslations('home.main');
  const bt = useTranslations('buttons');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const { classes } = useStyles({ isAr });

  return (
    <Grid container className={classes.container} component='section'>
      <Grid
        item
        xs={12}
        md={6}
        component={motion.div}
        variants={RowVariant}
        initial='hidden'
        animate='visible'
        transition={{
          duration: 1,
        }}
      >
        <Container className={classes.column1}>
          <Text textSize='3xl' textTransform='capitalize' textWeight='bold'>
            {t('title')}
          </Text>

          <Text textSize='lg' textTransform='capitalize' textWeight='light'>
            {t('description')}
          </Text>
          <Button
            background='main'
            radius='2xl'
            isBold
            sx={{
              alignSelf: { xs: 'stretch', sm: 'unset' },
            }}
          >
            {bt('explore')}
          </Button>
        </Container>
      </Grid>
      <Grid
        xs={12}
        md={6}
        item
        className={classes.column2}
        component={motion.div}
        variants={FadeInVariant}
        initial='hidden'
        animate='visible'
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <Image src={HomeMainBG} shadow placeholder='blur' alt='units' />
      </Grid>
    </Grid>
  );
};

export default HomeMain;
