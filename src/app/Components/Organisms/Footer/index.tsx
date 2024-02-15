'use client';

import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Box, Container, Grid } from '@mui/material';
import {
  MailOutlineOutlined,
  LocalPhoneOutlined,
  FmdGoodOutlined,
} from '@mui/icons-material';

import useStyles from './styles';
import Text from '../../Atoms/Text';
import Image from '../../Atoms/Image';
import Button from '../../Atoms/Button';
import NavLink from '../../Atoms/NavLink';
import FooterBG from '@/../public/image/Footer.svg';
import { navlinks, socialLinks } from '@/app/lib/data';

const Footer = () => {
  const t = useTranslations('footer');
  const bt = useTranslations('buttons');
  const { classes } = useStyles();
  const router = useRouter();

  const Contacts: SingleContact[] = [
    {
      icon: <FmdGoodOutlined fontSize='small' />,
      description: t('contact.location'),
    },
    {
      icon: <LocalPhoneOutlined fontSize='small' />,
      description: t('contact.phone'),
    },
    {
      icon: <MailOutlineOutlined fontSize='small' />,
      description: t('contact.mail'),
    },
  ];

  return (
    <Box component='section' className={classes.container}>
      <Container>
        <Grid
          container
          justifyContent={{ xs: 'center', sm: 'initial' }}
          rowGap={3}
        >
          <Grid item xs={12} sm={6}>
            <Box className={classes.title}>
              <Text
                hasGradientBG
                textSize='3xl'
                textWeight='medium'
                textTransform='capitalize'
              >
                {t('title')}
              </Text>
              <Button
                background='main'
                radius='2xl'
                isBold
                onPointerUp={(e) => router.push('/contact-us' as any)}
              >
                {bt('contact')}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2} className={classes.footerSection}>
            <Text textSize='base' textTransform='capitalize'>
              {t('sitemap.title')}
            </Text>
            <Box className={classes.sectionList} component='ul'>
              {navlinks.map((link) => {
                return (
                  <NavLink
                    isFooter
                    to={link.link}
                    key={link.title}
                    fontSize='sm'
                  >
                    {t(`sitemap.list.${link.title}` as any)}
                  </NavLink>
                );
              })}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2} className={classes.footerSection}>
            <Text textSize='base' textTransform='capitalize'>
              {t('follow.title')}
            </Text>
            <Box className={classes.sectionList} component='ul'>
              {socialLinks.map((link) => {
                return (
                  <NavLink
                    isFooter
                    to={link.link}
                    key={link.title}
                    fontSize='sm'
                  >
                    {t(`follow.list.${link.title}` as any)}
                  </NavLink>
                );
              })}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2} className={classes.footerSection}>
            <Text textSize='base' textTransform='capitalize'>
              {t('contact.title')}
            </Text>
            <Box className={classes.sectionList}>
              {Contacts.map((contact) => {
                return (
                  <Box
                    key={contact.description}
                    sx={{
                      display: 'flex',
                      gap: '0.5rem',
                    }}
                  >
                    {contact.icon}
                    <Text
                      textTransform='capitalize'
                      textSize='sm'
                      textWeight='light'
                    >
                      {contact.description}
                    </Text>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Image src={FooterBG} alt='footer' />
    </Box>
  );
};

export default Footer;
