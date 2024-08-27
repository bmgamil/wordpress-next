'use client';

import { useLocale } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { Box, List, ListItem, ListItemProps } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Text from '../Text';
import { Link } from '@/navigation';
import { useStyles } from './styles';
import {
  AccordionVariant,
  FadeInVariant,
  RowVariant,
} from '@/app/lib/MotionVariants';
import { AppPathnames } from '@/config';

type Props = ListItemProps & {
  to: string;
  currentActive?: string;
  children: React.ReactNode;
  isFooter?: boolean;
  isActive?: boolean;
  setActiveLine?: Function;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
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
    setIsOpen,
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

  const handleClickOutside = (ev: any) => {
    if (linkRef && !linkRef.current?.contains(ev.target)) {
      setIsMenuOpen(false);
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
    if (menu) {
      window.document.addEventListener('click', handleClickOutside);
    }

    return () => {
      if (menu) {
        window.document.removeEventListener('click', handleClickOutside);
      }
    };
  }, []);

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
      {...proprties}
    >
      <Link
        onClick={(e: any) => {
          if (menu) {
            e.preventDefault();
            setIsMenuOpen(!isMenuOpen);
          } else {
            setIsOpen && setIsOpen(false);
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
        {menu && (
          <Box
            component={motion.div}
            sx={{
              display: 'flex',
            }}
            animate={{
              rotate: isMenuOpen ? '180deg' : '0deg',
            }}
          >
            <KeyboardArrowDownIcon fontSize='medium' />
          </Box>
        )}
      </Link>

      <AnimatePresence>
        {menu && isMenuOpen && (
          <List
            className={classes.dropdownMenu}
            component={motion.ul}
            variants={AccordionVariant}
            initial='collapsed'
            animate='open'
            exit='collapsed'
            disablePadding
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
                    onClick={(e: any) => {
                      setIsOpen && setIsOpen(false);
                      setIsMenuOpen(false);
                    }}
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
