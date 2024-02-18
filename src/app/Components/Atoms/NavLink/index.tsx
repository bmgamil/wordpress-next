'use client';

import { useStyles } from './styles';
import { ListItem, ListItemProps } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { FadeInVariant } from '@/app/lib/MotionVariants';
import Text from '../Text';

type Props = ListItemProps & {
  to: string;
  children: React.ReactNode;
  isFooter?: boolean;
  isActive?: boolean;
  setActiveLine?: Function;
  fontSize: FontSize;
  index?: number;
  target?: string;
};

const NavLink = (props: Props) => {
  const {
    to,
    children,
    isFooter,
    isActive,
    setActiveLine,
    fontSize,
    index,
    target,
    ...proprties
  } = props;
  const { classes } = useStyles({ isFooter, fontSize });
  const linkRef = useRef<HTMLLIElement>(null);
  const locale = useLocale();
  useEffect(() => {
    if (isActive && setActiveLine && linkRef && linkRef.current) {
      const item = linkRef.current;
      const isAr = locale === 'ar';
      const linkAxis = Math.floor(
        isAr ? item.offsetLeft + item.offsetWidth : item.offsetLeft
      );
      const linkWidth = Math.floor(item.offsetWidth);
      setActiveLine(linkAxis, linkWidth);
    }
  }, [isActive, locale]);

  return (
    <ListItem
      component={motion.li}
      variants={FadeInVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{
        delay: index ? index * 0.1 : 0,
        duration: 0.3,
      }}
      className={classes.link}
      disablePadding
      ref={linkRef}
      {...proprties}
    >
      <Link href={to as '/' | '/pathnames'} target={target}>
        <Text className={classes.text}>{children}</Text>
      </Link>
    </ListItem>
  );
};

export default NavLink;
