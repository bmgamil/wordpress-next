import { Grid } from '@mui/material';

import FAQsList from '../../FAQsList';
import Text from '@/app/Components/Atoms/Text';
import { useTranslations } from 'next-intl';

type Props = {
  list: { q: string; a: string }[];
};

const ServiceFAQs = ({ list }: Props) => {
  const t = useTranslations('faqs');

  return (
    <Grid container columnSpacing={4}>
      <Grid item xs={12} md={4}>
        <Text textSize='2xl' textWeight='medium' hasGradientBG>
          {t('heading_2')}
        </Text>
      </Grid>
      <Grid item xs={12} md={8}>
        <FAQsList list={list} />
      </Grid>
    </Grid>
  );
};

export default ServiceFAQs;
