'use client';
import { Box, useTheme } from '@mui/material';
import Icon, { IconName } from '../../Atoms/Icon';
import Text from '../../Atoms/Text';
import { motion } from 'framer-motion';
import { RowVariant } from '@/app/lib/MotionVariants';

type Props = {
  contact: SingleContact;
  index: number;
};

const SingleContact = (props: Props) => {
  const {
    contact: { description, icon, title },
    index,
  } = props;
  const theme = useTheme();

  return (
    <Box
      display='grid'
      gridTemplateColumns='auto 1fr'
      gap={1}
      textTransform='capitalize'
      component={motion.div}
      variants={RowVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      custom={index}
    >
      {icon}
      <Box display='flex' flexDirection='column' gap={0.5}>
        <Text textSize='base' textWeight='medium'>
          {title}
        </Text>
        <Text textSize='sm' textWeight='light'>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default SingleContact;
