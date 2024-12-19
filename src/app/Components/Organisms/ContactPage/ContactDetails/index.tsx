'use client';

import { Box } from '@mui/material';
import {
  FmdGoodOutlined,
  LocalPhoneOutlined,
  MailOutlineOutlined,
} from '@mui/icons-material';
import { useLocale, useTranslations } from 'next-intl';
import useStyles from './styles';
import Text from '@/app/Components/Atoms/Text';
import SingleContact from '@/app/Components/Molecules/SingleContact';
import SocialLinks from '@/app/Components/Molecules/SocialLinks';
import { MotionDelay } from '@/app/lib/MotionVariants';

type Props = {
  details: options['footer'];
};

const ContactDetails = (props: Props) => {
  const {
    details: { social, contactUs, social_ar, contactUs_ar },
  } = props;
  const t = useTranslations('contact');
  const { classes } = useStyles();
  const isAr = useLocale() === 'ar';
  const socialLinks = isAr ? social_ar : social;
  const contact = isAr ? contactUs_ar : contactUs;

  const contacts: SingleContact[] = [
    {
      icon: <FmdGoodOutlined />,
      title: t('list.location.title'),
      description: contact[0].text,
      link: contact[0].url,
    },
    {
      icon: <LocalPhoneOutlined />,
      title: t('list.phone.title'),
      description: contact[1].text,
      link: contact[1].url,
    },
    {
      icon: <MailOutlineOutlined />,
      title: t('list.mail.title'),
      description: contact[2].text,
      link: contact[2].url,
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
      <SocialLinks social={socialLinks} />
    </Box>
  );
};

export default ContactDetails;
