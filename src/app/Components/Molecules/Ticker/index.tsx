'use client';

import { useLocale } from 'next-intl';
import Marquee from 'react-fast-marquee';
import { Box } from '@mui/material';

import { useStyles } from './style';
import Image from '../../Atoms/Image';

type Props = {
  gallery: options['home']['clients_gallary'];
};

const Ticker = (props: Props) => {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const { classes } = useStyles({ isAr });

  return (
    <Marquee
      className={classes.container}
      speed={150}
      direction='right'
      pauseOnHover
    >
      {Array.from(Array(4))
        .fill(props.gallery)
        .flat()
        .map((item, index) => (
          <Box
            sx={{
              padding: '0.5rem 3rem',
            }}
            key={`${item.id}-${index}`}
          >
            <Image src={item.url} alt={''} />
          </Box>
        ))}
    </Marquee>
  );
};

export default Ticker;
