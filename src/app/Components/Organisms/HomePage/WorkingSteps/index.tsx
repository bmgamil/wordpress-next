'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';

import useStyles from './style';
import Text from '@/app/Components/Atoms/Text';
import Image from '@/app/Components/Atoms/Image';
import Button from '@/app/Components/Atoms/Button';
import HomeSteps from '@/../public/image/home-steps.jpg';
import WorkingStepsList from '../../WorkingStepsList';
import SectionRoundedTitle from '@/app/Components/Molecules/SectionRoundedTitle';
import {
  FadeInVariant,
  MotionDelay,
  RowVariant,
} from '@/app/lib/MotionVariants';
import { useState } from 'react';

type Props = {
  stepsOptions: options['home']['steps'];
};

const HomeWorkingSteps = ({ stepsOptions }: Props) => {
  const t = useTranslations('home.steps');
  const bt = useTranslations('buttons');
  const { classes } = useStyles();
  const [selectorIndex, setSelectorIndex] = useState(0);

  return (
    <Box className={classes.container} component={motion.section} layout>
      <Box className={classes.header}>
        <SectionRoundedTitle
          number={t('number')}
          title={t('title')}
          textColor='dark'
        />
        <Box
          className={classes.heading}
          component={motion.div}
          variants={RowVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
        >
          <Text textSize='3xl' textTransform='capitalize' textColor='dark'>
            {t('heading_1')}
          </Text>
          <Text textSize='3xl' textColor='main'>
            {t('heading_2')}
          </Text>
        </Box>
      </Box>
      <Grid container justifyContent='space-between' rowGap={3}>
        <Grid item md={6} className={classes.column1}>
          <WorkingStepsList
            selectorIndex={selectorIndex}
            setSelectorIndex={setSelectorIndex}
            steps={stepsOptions}
          />
        </Grid>
        <Grid
          item
          md={4}
          className={classes.column2}
          component={motion.div}
          variants={FadeInVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: MotionDelay.sm,
          }}
        >
          <Box
            component={motion.div}
            variants={RowVariant}
            initial='hidden'
            animate='visible'
            key={selectorIndex}
            layout
            transition={{
              duration: MotionDelay.sm,
            }}
          >
            <Image
              src={stepsOptions[selectorIndex].image.url}
              alt={t('title')}
              width={stepsOptions[selectorIndex].image.width}
              height={stepsOptions[selectorIndex].image.height}
            />
          </Box>
        </Grid>
      </Grid>
      <Button textColor='main' radius='2xl' isBold>
        {bt('explore')}
      </Button>
    </Box>
  );
};

export default HomeWorkingSteps;
