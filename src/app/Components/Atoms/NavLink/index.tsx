'use client';

import { useLocale } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Box, List, ListItem, ListItemProps } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Text from '../Text';
import { Link } from '@/navigation';
import { useStyles } from './styles';
import { FadeInVariant, RowVariant } from '@/app/lib/MotionVariants';
import { AppPathnames } from '@/config';
import { handleFontSize } from '@/app/lib/handlers';

type Props = ListItemProps & {
  to: string;
  currentActive?: string;
  children: React.ReactNode;
  isFooter?: boolean;
  isActive?: boolean;
  setActiveLine?: Function;
  fontSize: FontSize;
  index?: number;
  target?: string;
  hasIcon?: boolean;
  isProjectCate?: boolean;
  menu?: any[];
  menuBaseUrl?: string;
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
    currentActive,
    hasIcon,
    isProjectCate,
    menu,
    menuBaseUrl,
    ...proprties
  } = props;
  const { classes } = useStyles({
    isFooter,
    fontSize,
    isProjectCate,
  });
  const linkRef = useRef<HTMLLIElement>(null);
  const locale = useLocale();
  const isAr = locale === 'ar';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleActiveLink = () => {
    if (isActive && setActiveLine && linkRef && linkRef.current) {
      const item = linkRef.current;
      const linkAxis = Math.floor(
        isAr ? item.offsetLeft + item.offsetWidth : item.offsetLeft
      );
      const linkWidth = Math.floor(item.offsetWidth);
      setActiveLine(linkAxis, linkWidth);
    }
  };

  useEffect(() => {
    let timeOut: string | number | NodeJS.Timeout | undefined;
    const onResize = () => {
      clearTimeout(timeOut);
      timeOut = setTimeout(handleActiveLink, 500);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [currentActive, locale]);

  useEffect(() => {
    handleActiveLink();
  }, [isActive, isAr]);

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
      onMouseOver={() => menu && setIsMenuOpen(true)}
      onMouseLeave={() => menu && setIsMenuOpen(false)}
      {...proprties}
    >
      <Link
        onClick={(e: any) => {
          if (menu) {
            e.preventDefault();
            setIsMenuOpen(true);
          }
        }}
        href={to as AppPathnames}
        target={target}
      >
        <Text className={classes.text}>{children}</Text>
        {hasIcon && !menu && (
          <Box className={classes.icon}>
            {isAr ? (
              <ArrowCircleLeftOutlinedIcon />
            ) : (
              <ArrowCircleRightOutlinedIcon />
            )}
          </Box>
        )}
        {menu && <KeyboardArrowDownIcon fontSize='medium' />}
      </Link>

      <AnimatePresence>
        {menu && isMenuOpen && (
          <List
            className={classes.dropdownMenu}
            component={motion.ul}
            variants={FadeInVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{
              delay: 0.3,
            }}
          >
            {menu.map((item: any, i) => {
              return (
                <ListItem
                  key={item.id}
                  component={motion.li}
                  variants={RowVariant}
                  initial='hidden'
                  animate='visible'
                  custom={i}
                >
                  <Link
                    href={`${menuBaseUrl}/${item.slug}` as AppPathnames}
                    target={target}
                  >
                    <Text className={classes.text}>
                      {item.title.replace('#038;', '')}
                    </Text>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        )}
      </AnimatePresence>
    </ListItem>
  );
};

export default NavLink;
