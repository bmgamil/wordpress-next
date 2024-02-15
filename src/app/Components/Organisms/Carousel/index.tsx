'use client';
import { Box } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import Text from '../../Atoms/Text';
import useStyles from './styles';
import Button from '../../Atoms/Button';
import { useLocale } from 'next-intl';

type Props = {
  children: React.ReactNode;
  title: string;
  listLength: number;
};

const Carousel = (props: Props) => {
  const { title, children, listLength } = props;
  const locale = useLocale();
  const isAr = locale === 'ar';
  const { classes } = useStyles({ listLength });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction: isAr ? 'rtl' : 'ltr',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Text hasGradientBG variant='h3' textSize='xl' textWeight='medium'>
          {title}
        </Text>
        <Box className={classes.buttons}>
          <Button
            radius='full'
            textColor='light'
            onPointerUp={() => scrollPrev()}
            endIcon={undefined}
          >
            {isAr ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </Button>
          <Button
            radius='full'
            textColor='light'
            onPointerUp={() => scrollNext()}
            endIcon={undefined}
          >
            {isAr ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </Button>
        </Box>
      </Box>
      <Box ref={emblaRef} className='embla'>
        <Box className='embla__container'>{children}</Box>
      </Box>
    </Box>
  );
};

export default Carousel;
