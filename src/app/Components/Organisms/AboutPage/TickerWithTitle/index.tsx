'use client';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';

import { useStyles } from './style';
import Text from '@/app/Components/Atoms/Text';
import Ticker from '@/app/Components/Molecules/Ticker';

type Props = {
  gallery: options['home']['clients_gallary'];
};

const TickerWithTitle = (props: Props) => {
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
      <Ticker gallery={props.gallery} />
    </Box>
  );
};

export default TickerWithTitle;
