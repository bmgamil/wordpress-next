'use client';

import Text from '@/app/Components/Atoms/Text';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import FAQsList from '../FAQsList';
import useStyles from './styles';

const FAQs = () => {
  const t = useTranslations('faqs');
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.heading}>
        <Text
          textSize='2xl'
          hasGradientBG
          textWeight='medium'
          textTransform='capitalize'
        >
          {t('heading_1')}
        </Text>
        <Text
          textSize='2xl'
          hasGradientBG
          textWeight='medium'
          textTransform='capitalize'
        >
          {t('heading_2')}
        </Text>
      </Box>

      {/* <FAQsList /> */}
    </Box>
  );
};

export default FAQs;
