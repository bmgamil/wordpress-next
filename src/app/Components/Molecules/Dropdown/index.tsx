'use client';

import { useState } from 'react';
import { useStyles } from './styles';
import { Box, List, ListItem } from '@mui/material';
import Text from '../../Atoms/Text';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AnimatePresence, motion } from 'framer-motion';
import { RowVariant } from '@/app/lib/MotionVariants';

type Props = {
  currentValue: string;
  list: any[];
  onChange: (value: string, title: string) => void;
  className?: string;
  hasAll?: boolean;
};

const Dropdown = (props: Props) => {
  const { currentValue, list, onChange, className, hasAll } = props;
  const [isOpen, setIsOpen] = useState(false);

  const { classes } = useStyles({ isOpen });

  const handleChange = (value: string, title: string) => {
    onChange(value, title);
    setIsOpen(false);
  };

  return (
    <Box className={`${classes.container} ${className}`}>
      <Box className={classes.header} onPointerUp={() => setIsOpen(!isOpen)}>
        <Text textSize='lg' textTransform='capitalize' textColor='light'>
          {currentValue}
        </Text>
        <KeyboardArrowDownIcon fontSize='medium' className={classes.icon} />
      </Box>
      <AnimatePresence>
        {isOpen && (
          <List
            className={classes.list}
            component={motion.ul}
            variants={RowVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
            custom={0}
          >
            {hasAll && (
              <ListItem
                className={classes.listItem}
                onClick={() => handleChange('', 'all')}
                component={motion.li}
                variants={RowVariant}
                initial='hidden'
                animate='visible'
                custom={0}
              >
                all
              </ListItem>
            )}

            {list.map((li, i) => (
              <ListItem
                className={`${classes.listItem} ${
                  li.name === currentValue && 'active'
                }`}
                key={li.id}
                onClick={() =>
                  handleChange(li.slug, li.name.replace('#038;', ''))
                }
                component={motion.li}
                variants={RowVariant}
                initial='hidden'
                animate='visible'
                custom={i}
              >
                {li.name.replace('amp;', '')}
              </ListItem>
            ))}
          </List>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Dropdown;
