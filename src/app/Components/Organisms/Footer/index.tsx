'use client';

import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Box, Container, Grid } from '@mui/material';

import useStyles from './styles';
import Text from '../../Atoms/Text';
import Image from '../../Atoms/Image';
import Button from '../../Atoms/Button';
import NavLink from '../../Atoms/NavLink';
import { navlinks } from '@/app/lib/data';

type Props = {
  footer: options['footer'];
};

const Footer = ({ footer }: Props) => {
  const t = useTranslations('footer');
  const bt = useTranslations('buttons');
  const { classes } = useStyles();
  const router = useRouter();

  const { contactUs, logo, social } = footer;

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
              {social.map((link) => {
                return (
                  <NavLink isFooter to={link.url} key={link.text} fontSize='sm'>
                    {link.text}
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
              {contactUs.map((contact) => {
                return (
                  <NavLink
                    to={`${contact.url}`}
                    fontSize='sm'
                    key={contact.text}
                    isFooter
                    target='_blank'
                  >
                    {contact.icon && (
                      <Image
                        src={contact.icon.url}
                        width={contact.icon.width}
                        height={contact.icon.height}
                        alt={contact.text}
                      />
                    )}
                    {contact.text}
                  </NavLink>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Image
        src={logo.url}
        alt='footer logo'
        width={logo.width}
        height={logo.height}
      />
    </Box>
  );
};

export default Footer;
