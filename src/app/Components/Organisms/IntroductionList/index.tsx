'use client';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';

import useStyles from './styles';
import Text from '../../Atoms/Text';
import { MotionDelay } from '@/app/lib/MotionVariants';

const IntroductionList = () => {
  const t = useTranslations('about.introduction');
  const { classes } = useStyles();

  const IntroductionTexts = [
    { title: t('sec_1.title'), description: t('sec_1.description') },
    { title: t('sec_2.title'), description: t('sec_2.description') },
    { title: t('sec_3.title'), description: t('sec_3.description') },
  ];

  return (
    <Box className={classes.container}>
      {IntroductionTexts.map((text) => {
        return (
          <Box className={classes.textContainer} key={text.title}>
            <Text
              textColor='main'
              textSize='xl'
              textWeight='medium'
              animate
              delay={MotionDelay.xs}
            >
              {text.title}
            </Text>
            <Text
              textColor='dark'
              textSize='base'
              animate
              delay={MotionDelay.sm}
            >
              {text.description}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default IntroductionList;
