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
      link: 'https://www.google.com/maps/place/13+%D9%85%D8%AD%D9%85%D8%AF+%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%D8%8C+%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86+%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9%D8%8C+%D9%82%D8%B3%D9%85+%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%E2%80%AC+4521105%E2%80%AD/@30.1009555,31.3082146,19z/data=!3m1!4b1!4m6!3m5!1s0x1458157f6fa4f8bd:0x5aaf0d5f8a49af14!8m2!3d30.1009555!4d31.3075709!16s%2Fg%2F11vls7g8yb?entry=ttu',
    },
    {
      icon: <LocalPhoneOutlined fontSize='small' />,
      description: t('contact.phone'),
      link: 'tel:+201281424046',
    },
    {
      icon: <MailOutlineOutlined fontSize='small' />,
      description: t('contact.mail'),
      link: 'mailto:sales@units.com.eg',
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
            <Box className={classes.sectionList} component={'ul'}>
              {Contacts.map((contact) => {
                return (
                  <NavLink
                    to={`${contact.link}`}
                    fontSize='sm'
                    key={contact.description}
                    isFooter
                    target='_blank'
                  >
                    {contact.icon}
                    {contact.description}
                  </NavLink>
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
