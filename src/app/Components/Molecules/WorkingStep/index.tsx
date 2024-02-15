'use client';

import { Box } from '@mui/material';
import { useStyles } from './style';
import RoundedTitle from '../../Atoms/RoundedTitle';
import Text from '../../Atoms/Text';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { RowVariant } from '@/app/lib/MotionVariants';

type Props = {
  title: string;
  number: string;
  description: string;
  index: number;
};

const WorkingStep = (props: Props) => {
  const { description, title, number, index } = props;
  const [isHovered, setIsHovered] = useState(false);
  const { classes } = useStyles({ isHovered });

  return (
    <Box
      className={classes.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      component={motion.div}
      variants={RowVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      custom={index}
    >
      <Box className={classes.innerContainer}>
        <RoundedTitle radius='full' textColor='dark'>
          {number}
        </RoundedTitle>
        <Box className={classes.body}>
          <Text textSize='lg' textWeight='medium' textTransform='capitalize'>
            {title}
          </Text>

          <Text textSize='base' textWeight='regular' textTransform='capitalize'>
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkingStep;
