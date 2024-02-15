'use client';

import { useLocale } from 'next-intl';
import { Box, List, ListItem } from '@mui/material';

import { useStyles } from './style';
import Image from '../../Atoms/Image';
import { makeid } from '@/app/lib/handlers';
import Adobe from '@/../public/image/adobe.svg';
import Amazon from '@/../public/image/amazon.svg';
import Netflix from '@/../public/image/netflix.svg';

const Ticker = () => {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const { classes } = useStyles({ isAr });

  const ImageList = [
    {
      id: makeid(3),
      alt: 'netflix',
      src: Netflix,
    },
    {
      id: makeid(3),
      alt: 'amazon',
      src: Amazon,
    },
    {
      id: makeid(3),
      alt: 'adobe',
      src: Adobe,
    },
    {
      id: makeid(3),
      alt: 'netflix',
      src: Netflix,
    },
    {
      id: makeid(3),
      alt: 'amazon',
      src: Amazon,
    },
    {
      id: makeid(3),
      alt: 'adobe',
      src: Adobe,
    },
  ];

  return (
    <Box className={classes.container}>
      <List className={classes.innerContainer}>
        {ImageList.map((item, index) => (
          <ListItem key={item.id}>
            <Image src={item.src} alt={item.alt} />
          </ListItem>
        ))}
        {ImageList.map((item, index) => (
          <ListItem key={item.id}>
            <Image src={item.src} alt={item.alt} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Ticker;
