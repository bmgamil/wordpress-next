'use client';

import { useEffect, useState } from 'react';
import Text from '../../Atoms/Text';
import Accordion from '../../Molecules/Accordion';
import SingleContact from '../../Molecules/SingleContact';
import { Box } from '@mui/material';
import { motion, useScroll } from 'framer-motion';

const AccordionList = () => {
  const [expandedId, setExpandedId] = useState('');
  const { scrollYProgress, scrollX } = useScroll({
    offset: ['end end', 'start start'],
  });
  const onClick = (id: string) => {
    if (id === expandedId) {
      setExpandedId('');
    } else {
      setExpandedId(id);
    }
  };

  return (
    <Box
      sx={{
        background: (theme) => theme.palette.primary.main,
        padding: '10px 0',
        borderRadius: '10px',
        width: '100%',
      }}
    >
      <Accordion
        header={<Text>Lorem ipsum dolor sit amet</Text>}
        itemId='panel1'
        expandedId={expandedId}
        setExpandedId={onClick}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          voluptate odio dignissimos nisi eveniet facilis perferendis soluta
          saepe blanditiis, tempore voluptatibus vel commodi nobis architecto
          aut, sunt laudantium hic libero?
        </Text>
      </Accordion>
      <Accordion
        header={<Text>Lorem ipsum dolor sit amet</Text>}
        itemId='panel2'
        expandedId={expandedId}
        setExpandedId={onClick}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          voluptate odio dignissimos nisi eveniet facilis perferendis soluta
          saepe blanditiis, tempore voluptatibus vel commodi nobis architecto
          aut, sunt laudantium hic libero?
        </Text>
      </Accordion>

      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        sx={{ background: 'orange', height: 100 }}
        viewport={{ once: false }}
        transition={{
          duration: 10,
        }}
        // style={{ scaleX: scrollYProgress }}
      ></Box>
    </Box>
  );
};

export default AccordionList;
