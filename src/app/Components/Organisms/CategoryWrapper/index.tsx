'use client';

import Text from '../../Atoms/Text';
import ProjectsList from '../ProjectsList';
import { Box } from '@mui/material';
import { useStyles } from './style';
import { MotionDelay } from '@/app/lib/MotionVariants';

type Props = {
  service: ServiceDetail;
};

const CategoryWrapper = ({ service }: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Text
        textTransform='capitalize'
        textSize='3xl'
        hasGradientBG
        textWeight='medium'
        animate
        delay={MotionDelay.xs}
      >
        {service.title.replace('#038;', '')}
      </Text>
      <ProjectsList list={service.projects} />
    </Box>
  );
};

export default CategoryWrapper;
