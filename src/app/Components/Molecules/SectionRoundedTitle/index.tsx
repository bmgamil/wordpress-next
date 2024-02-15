'use client';

import { Box } from '@mui/material';
import RoundedTitle from '../../Atoms/RoundedTitle';
import { motion } from 'framer-motion';
import { RowVariant } from '@/app/lib/MotionVariants';

type Props = {
  number: string;
  title: string;
  textColor: TextColor;
};

const SectionRoundedTitle = (props: Props) => {
  const { number, title, textColor } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
      component={motion.div}
      variants={RowVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
    >
      <RoundedTitle textColor={textColor} radius='full'>
        {number}
      </RoundedTitle>
      <RoundedTitle textColor={textColor} radius='xl'>
        {title}
      </RoundedTitle>
    </Box>
  );
};

export default SectionRoundedTitle;
