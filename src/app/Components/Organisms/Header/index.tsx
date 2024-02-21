'use client';
import { useState } from 'react';
import { Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import { useLocale, useTranslations } from 'next-intl';

import { Link, useRouter } from '@/navigation';
import { useStyles } from './styles';
import Image from '@/app/Components/Atoms/Image';
import Button from '@/app/Components/Atoms/Button';
import Navbar from '@/app/Components/Molecules/Navbar';
import HeaderLogo from '@/../public/image/header-logo.svg';
import BluredCircle from '@/app/Components/Atoms/BluredCircle';
import Text from '../../Atoms/Text';

type Props = {
  header: options['header'];
};

const Header = ({ header }: Props) => {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const t = useTranslations('footer');
  const bt = useTranslations('buttons');
  const [isOpen, setIsOpen] = useState(false);
  const { classes } = useStyles({ isAr, isOpen });
  const router = useRouter();
  const { logo } = header;

  return (
    <Box className={classes.container}>
      <Container sx={{ height: '100%' }}>
        <Box className={classes.innerContainer}>
          {/* <LocaleSwitcherSelect /> */}
          <BluredCircle />
          <Link href='/'>
            <Image
              priority
              src={logo.url}
              alt='header logo'
              width={logo.width}
              height={logo.height}
            />
          </Link>

          <Button
            sx={{
              padding: '0.5rem !important',
              display: { xs: 'flex', md: 'none' },
            }}
            endIcon={isOpen ? <Close /> : <MenuIcon />}
            background='main'
            radius='md'
            iconSize='xl'
            onPointerUp={() => setIsOpen((prev) => !prev)}
          />

          <Box className={classes.navContainer}>
            <Navbar setIsOpen={setIsOpen} />
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

          <Button
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
            disableRipple
            fontSize='base'
            textTrasfrom='capitalize'
            isBold
            onPointerUp={(e) => router.push('/contact-us' as any)}
          >
            {bt('contact')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
