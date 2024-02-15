'use client';
import { Box } from '@mui/material';

import Text from '@/app/Components/Atoms/Text';
import Ticker from '@/app/Components/Molecules/Ticker';
import { useTranslations } from 'next-intl';
import { useStyles } from './style';

const TickerWithTitle = () => {
  const t = useTranslations('about');
  const { classes } = useStyles();

  return (
    <Box className={classes.contianer}>
      <Text
        hasGradientBG
        textTransform='capitalize'
        textWeight='medium'
        textSize='2xl'
      >
        {t('tickerTitle')}
      </Text>
      <Ticker />
    </Box>
  );
};

export default TickerWithTitle;
