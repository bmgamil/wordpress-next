'use client';
import { motion } from 'framer-motion';
import { Box, useTheme } from '@mui/material';

import Text from '../../Atoms/Text';
import { RowVariant } from '@/app/lib/MotionVariants';
import { Link } from '@/navigation';
import { useStyles } from './style';

type Props = {
  contact: SingleContact;
  index: number;
};

const SingleContact = (props: Props) => {
  const {
    contact: { description, icon, title, link },
    index,
  } = props;

  const { classes } = useStyles();

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
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className={classes.link}
        >
          <Text textSize='sm' textWeight='light' textTransform={'none'}>
            {description}
          </Text>
        </a>
      </Box>
    </Box>
  );
};

export default SingleContact;
