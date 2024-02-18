'use client';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocale, useTranslations } from 'next-intl';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import { Link, useRouter } from '@/navigation';
import { useStyles } from './styles';
import ScrollBar from '../../Atoms/Scrollbar';
import Image from '@/app/Components/Atoms/Image';
import Button from '@/app/Components/Atoms/Button';
import Navbar from '@/app/Components/Molecules/Navbar';
import HeaderLogo from '@/../public/image/header-logo.svg';
import BluredCircle from '@/app/Components/Atoms/BluredCircle';
import LocaleSwitcherSelect from '../../Molecules/LocaleSwitcher';
import { useAppContext } from '@/context';

const Header = () => {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const t = useTranslations('buttons');
  const { classes } = useStyles({ isAr });
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { appMode, setAppMode } = useAppContext();

  return (
    <Box className={classes.container}>
      {/* <LocaleSwitcherSelect /> */}
      <ScrollBar />
      <BluredCircle />
      <Link href='/'>
        <Image priority src={HeaderLogo} alt='header logo' />
      </Link>
      <ClickAwayListener
        onClickAway={() => {
          setIsOpen(false);
        }}
      >
        <Box>
          <Button
            sx={{
              padding: '0.5rem !important',
              display: { xs: 'flex', md: 'none' },
            }}
            endIcon={<MenuIcon />}
            background='main'
            radius='md'
            iconSize='xl'
            onPointerUp={() => setIsOpen((prev) => !prev)}
          />

          <Box className={`${classes.navContainer} ${isOpen ? 'active' : ''}`}>
            <Navbar setIsOpen={setIsOpen} />
            <Button
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
              disableRipple
              fontSize='base'
              textTrasfrom='capitalize'
              isBold
            >
              {t('contact')}
            </Button>
          </Box>
        </Box>
      </ClickAwayListener>
      {/* <Button
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
        disableRipple
        fontSize='base'
        textTrasfrom='capitalize'
        isBold
        onPointerUp={(e) => router.push('/contact-us' as any)}
      >
        {t('contact')}
      </Button> */}
      <Button
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
        disableRipple
        fontSize='base'
        textTrasfrom='capitalize'
        isBold
        onPointerUp={(e) => {
          if (setAppMode) {
            appMode === 'dark' ? setAppMode('light') : setAppMode('dark');
            appMode === 'dark'
              ? localStorage.setItem('appMode', JSON.stringify('light'))
              : localStorage.setItem('appMode', JSON.stringify('dark'));
          }
        }}
      >
        Switch
      </Button>
    </Box>
  );
};

export default Header;
