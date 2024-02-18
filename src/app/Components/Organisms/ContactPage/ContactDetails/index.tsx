'use client';

import { Box } from '@mui/material';
import {
  FmdGoodOutlined,
  LocalPhoneOutlined,
  MailOutlineOutlined,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import useStyles from './styles';
import Text from '@/app/Components/Atoms/Text';
import SingleContact from '@/app/Components/Molecules/SingleContact';
import SociaLinks from '@/app/Components/Molecules/SocialLinks';
import { MotionDelay } from '@/app/lib/MotionVariants';

const ContactDetails = () => {
  const t = useTranslations('contact');
  const { classes } = useStyles();

  const contacts: SingleContact[] = [
    {
      icon: <FmdGoodOutlined />,
      description: t('list.location.description'),
      title: t('list.location.title'),
      link: 'https://www.google.com/maps/place/13+%D9%85%D8%AD%D9%85%D8%AF+%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%D8%8C+%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86+%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9%D8%8C+%D9%82%D8%B3%D9%85+%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%E2%80%AC+4521105%E2%80%AD/@30.1009555,31.3082146,19z/data=!3m1!4b1!4m6!3m5!1s0x1458157f6fa4f8bd:0x5aaf0d5f8a49af14!8m2!3d30.1009555!4d31.3075709!16s%2Fg%2F11vls7g8yb?entry=ttu',
    },
    {
      icon: <LocalPhoneOutlined />,
      description: t('list.phone.description'),
      title: t('list.phone.title'),
      link: 'tel:+201281424046',
    },
    {
      icon: <MailOutlineOutlined />,
      description: t('list.mail.description'),
      title: t('list.mail.title'),
      link: 'mailto:sales@units.com.eg',
    },
  ];

  return (
    <Box className={classes.container} component='section'>
      <Box className={classes.description}>
        <Text
          hasGradientBG
          textWeight='medium'
          textSize='2xl'
          animate
          delay={MotionDelay.xs}
        >
          {t('description.title')}
        </Text>
        <Text textSize='base' animate delay={MotionDelay.sm}>
          {t('description.description')}
        </Text>
      </Box>
      <Box className={classes.details}>
        {contacts.map((contact, i) => {
          return (
            <SingleContact contact={contact} key={contact.title} index={i} />
          );
        })}
      </Box>
      <SociaLinks />
    </Box>
  );
};

export default ContactDetails;
