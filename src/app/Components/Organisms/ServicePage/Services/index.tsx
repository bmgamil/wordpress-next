'use client';
import { Box, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';

import useStyles from './style';
import Text from '@/app/Components/Atoms/Text';
import ServicesBlogsList from '../../ServicesList';
import { MotionDelay } from '@/app/lib/MotionVariants';

const ServicePageServices = ({
  children,
  services,
}: {
  children: React.ReactNode;
  services: ServiceDetail[];
}) => {
  const t = useTranslations('services');
  const { classes } = useStyles();

  return (
    <Box className={classes.container} component='section'>
      <Box className={classes.header}>
        <Text
          textSize='2xl'
          hasGradientBG
          textWeight='medium'
          animate
          delay={MotionDelay.xs}
        >
          {t('heading')}
        </Text>

        <Text textColor='light' textSize='sm' animate delay={MotionDelay.sm}>
          {t('body')}
        </Text>
      </Box>
      <Grid container columnSpacing={4} rowGap={4}>
        <Grid item xs={12} md={4}>
          <ServicesBlogsList textSize='base' iconSize='lg' list={services} />
        </Grid>
        {children}
      </Grid>
    </Box>
  );
};

export default ServicePageServices;
