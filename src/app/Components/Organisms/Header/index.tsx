'use client';
import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import { useLocale, useTranslations } from 'next-intl';

import { Link, usePathname, useRouter } from '@/navigation';
import { useStyles } from './styles';
import Image from '@/app/Components/Atoms/Image';
import Button from '@/app/Components/Atoms/Button';
import Navbar from '@/app/Components/Molecules/Navbar';
import HeaderLogo from '@/../public/image/header-logo.svg';
import BluredCircle from '@/app/Components/Atoms/BluredCircle';
import Text from '../../Atoms/Text';
import { AppPathnames } from '@/config';
import LocaleSwitcherSelect from '../../Molecules/LocaleSwitcher';

type Props = {
  header: options['header'];
  services: ServiceDetail[];
};

const Header = ({ header, services }: Props) => {
  const { logo, logo_ar } = header;

  const router = useRouter();
  const pathname = usePathname();

  const locale = useLocale();
  const isAr = locale === 'ar';
  const t = useTranslations('footer');
  const bt = useTranslations('buttons');

  const [isOpen, setIsOpen] = useState(false);

  const { classes } = useStyles({ isAr, isOpen });

  const currentLogo = isAr ? logo_ar : logo;

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement;
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <Box className={classes.container}>
      <Container sx={{ height: '100%' }}>
        <Box className={classes.innerContainer}>
          <BluredCircle />

          <Link href='/'>
            <Image
              priority
              src={currentLogo.url}
              alt='header logo'
              width={currentLogo.width}
              height={currentLogo.height}
              draggable={false}
            />
          </Link>
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '0.5rem',
              },
            }}
          >
            <LocaleSwitcherSelect />

            <Button
              sx={{
                padding: '0.5rem !important',
              }}
              endIcon={isOpen ? <Close /> : <MenuIcon />}
              background='main'
              radius='md'
              iconSize='xl'
              onPointerUp={() => setIsOpen((prev) => !prev)}
            />
          </Box>

          <Box className={classes.navContainer}>
            <Navbar setIsOpen={setIsOpen} services={services} />
            <Text
              hasGradientBG
              textSize='3xl'
              textWeight='medium'
              textTransform='capitalize'
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              {t('title')}
            </Text>
            <Button
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
              background='main'
              radius='2xl'
              fontSize='base'
              textTrasfrom='capitalize'
              isBold
            >
              {bt('contact')}
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Button
              sx={{
                whiteSpace: 'nowrap',
              }}
              disableRipple={pathname === '/'}
              background={pathname !== '/' ? 'main' : undefined}
              radius='2xl'
              fontSize='base'
              textTrasfrom='capitalize'
              isBold
              onPointerUp={(e) => router.push('/contact')}
            >
              {bt('contact')}
            </Button>
            <Box>
              <LocaleSwitcherSelect />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
