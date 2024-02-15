'use client';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import useStyles from './style';

import Text from '@/app/Components/Atoms/Text';
import ServicesBlogsList from '../../ServicesList';
import { RowVariant } from '@/app/lib/MotionVariants';
import SectionRoundedTitle from '@/app/Components/Molecules/SectionRoundedTitle';

type Props = {
  services: ServiceDetail[];
};
const HomeService = ({ services }: Props) => {
  const t = useTranslations('home.services');
  const ts = useTranslations('services');
  const { classes } = useStyles();
  return (
    <Box className={classes.container} component='section'>
      <Box className={classes.header}>
        <SectionRoundedTitle
          number={t('number')}
          title={t('title')}
          textColor='light'
        />
        <Box
          className={classes.headingContainer}
          component={motion.div}
          variants={RowVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
          custom={3}
        >
          <Box className={classes.heading}>
            <Text textSize='3xl' textTransform='capitalize'>
              {ts('main.heading_1.we')}
            </Text>
            <Text textSize='3xl' hasBgImage rotateDeg={-4}>
              {ts('main.heading_1.always')}
            </Text>
            <Text textSize='3xl'>{ts('main.heading_1.provide')}</Text>
          </Box>
          <Box className={classes.heading}>
            <Text textSize='3xl'>{ts('main.heading_2.best')}</Text>
            <Text textSize='3xl' hasBgImage rotateDeg={4}>
              {ts('main.heading_2.service')}
            </Text>
            <Text textSize='3xl'>{ts('main.heading_2.for_you')}</Text>
          </Box>
        </Box>
      </Box>
      <ServicesBlogsList textSize='xl' iconSize='xl' list={services} />
    </Box>
  );
};

export default HomeService;
