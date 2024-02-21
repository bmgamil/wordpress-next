'use client';

import { Box } from '@mui/material';
import { useStyles } from './style';
import RoundedTitle from '../../Atoms/RoundedTitle';
import Text from '../../Atoms/Text';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RowVariant } from '@/app/lib/MotionVariants';

type Props = {
  title: string;
  number: number;
  description: string;
  index: number;
  selectorIndex: number;
  setSelectorIndex: Dispatch<SetStateAction<number>>;
};

const WorkingStep = (props: Props) => {
  const { description, title, number, index, selectorIndex, setSelectorIndex } =
    props;
  const [isHovered, setIsHovered] = useState(false);
  const { classes } = useStyles({ isHovered });

  useEffect(() => {
    selectorIndex === index ? setIsHovered(true) : setIsHovered(false);
  }, [selectorIndex]);

  return (
    <Box
      className={classes.container}
      onPointerUp={() => setSelectorIndex(index)}
      component={motion.div}
      variants={RowVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      custom={index}
      sx={{
        cursor: 'pointer',
      }}
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
