'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

import Text from '../../Atoms/Text';
import Accordion from '../../Molecules/Accordion';
import { RowVariant } from '@/app/lib/MotionVariants';

type Props = {
  list: { q: string; a: string }[];
};

const FAQsList = ({ list }: Props) => {
  const [expandedId, setExpandedId] = useState('');

  const onChange = (id: string) => {
    if (expandedId === id) {
      setExpandedId('');
    } else {
      setExpandedId(id);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      {list.map((item, i) => {
        const header = (
          <Text textSize='lg' textWeight='medium'>
            {item.q}
          </Text>
        );
        return (
          <Box
            component={motion.div}
            variants={RowVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
            sx={{
              borderBottom: '1px solid',
            }}
            custom={i}
            key={item.q}
          >
            <Accordion
              header={header}
              expandedId={expandedId}
              setExpandedId={onChange}
              itemId={item.q}
            >
              <Text>{item.a}</Text>
            </Accordion>
          </Box>
        );
      })}
    </Box>
  );
};

export default FAQsList;
