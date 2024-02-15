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
    },
    {
      icon: <LocalPhoneOutlined />,
      description: t('list.phone.description'),
      title: t('list.phone.title'),
    },
    {
      icon: <MailOutlineOutlined />,
      description: t('list.mail.description'),
      title: t('list.mail.title'),
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
