'use client';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';

import useStyles from './style';
import Text from '@/app/Components/Atoms/Text';
import ServicesBlogsList from '../../ServicesList';

type Props = {
  services: ServiceDetail[];
};

const AboutService = ({ services }: Props) => {
  const t = useTranslations('services');
  const { classes } = useStyles();
  return (
    <Box className={classes.container} component='section'>
      <Box className={classes.header}>
        <Text textSize='2xl' hasGradientBG textWeight='medium'>
          {t('heading')}
        </Text>

        <Text textColor='light' textSize='sm'>
          {t('body')}
        </Text>
      </Box>

      <ServicesBlogsList textSize='lg' list={services} />
    </Box>
  );
};

export default AboutService;
