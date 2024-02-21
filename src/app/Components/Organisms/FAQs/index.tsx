'use client';

import Text from '@/app/Components/Atoms/Text';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import useStyles from './styles';
import FAQsList from '../FAQsList';

type Props = {
  list: FAQ[];
};

const FAQs = ({ list }: Props) => {
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

      <FAQsList list={list} />
    </Box>
  );
};

export default FAQs;
