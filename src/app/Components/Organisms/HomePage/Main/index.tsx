'use client';

import { motion } from 'framer-motion';
import { Container, Grid } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';

import useStyles from './styles';
import Text from '@/app/Components/Atoms/Text';
import Image from '@/app/Components/Atoms/Image';
import Button from '@/app/Components/Atoms/Button';
import { FadeInVariant, RowVariant } from '@/app/lib/MotionVariants';

type Props = {
  mainOptions: options['home']['main'];
};

const HomeMain = ({ mainOptions }: Props) => {
  const bt = useTranslations('buttons');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const [width, setWidth] = useState(0);
  const containerRef: RefObject<HTMLElement> = useRef(null);
  const { classes } = useStyles({ isAr, width });
  const { description, image, title } = mainOptions;

  useLayoutEffect(() => {
    let viewPortWidth = window.document.documentElement.clientWidth;
    setWidth((x) =>
      containerRef && containerRef.current
        ? viewPortWidth - containerRef.current.clientWidth
        : 0
    );
    const handleResize = () => {
      let viewPortWidth = window.document.documentElement.clientWidth;
      setWidth((x) =>
        containerRef && containerRef.current
          ? viewPortWidth - containerRef.current.clientWidth
          : 0
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Grid
      container
      className={classes.container}
      component='section'
      ref={containerRef}
    >
      <Grid
        item
        xs={12}
        md={6}
        className={classes.column1}
        component={motion.div}
        variants={RowVariant}
        initial='hidden'
        animate='visible'
        transition={{
          duration: 1,
        }}
      >
        <Text textSize='3xl' textTransform='capitalize' textWeight='bold'>
          {title}
        </Text>

        <Text textSize='lg' textWeight='light'>
          {description}
        </Text>
        <Button
          background='main'
          radius='2xl'
          isBold
          sx={{
            alignSelf: { xs: 'stretch', sm: 'unset' },
          }}
        >
          {bt('explore')}
        </Button>
      </Grid>
      <Grid
        xs={12}
        md={6}
        item
        className={classes.column2}
        // component={motion.div}
        // variants={FadeInVariant}
        // initial='hidden'
        // animate='visible'
        // transition={{
        //   duration: 1,
        //   delay: 1,
        // }}
      >
        <Image
          src={image.url}
          shadow
          height={image.height}
          width={image.width}
          blurDataURL={image.placeholder.base64}
          placeholder='blur'
          alt='units'
          priority
        />
      </Grid>
    </Grid>
  );
};

export default HomeMain;
