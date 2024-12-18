import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Box, Container, Grid } from '@mui/material';

import { getFAQS } from '@/app/lib/Controller';
import Text from '@/app/Components/Atoms/Text';
import FAQs from '@/app/Components/Organisms/FAQs';
import { MotionDelay } from '@/app/lib/MotionVariants';
import PageIntroText from '@/app/Components/Organisms/PageIntroText';
import ContactForm from '@/app/Components/Organisms/ContactPage/ContactForm';
import ContactDetails from '@/app/Components/Organisms/ContactPage/ContactDetails';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const ContactUs = async () => {
  const t = await getTranslations('contact.main');
  const faqs: FAQ[] = await getFAQS();
  return (
    <Container
      component='main'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        paddingBottom: '4rem',
      }}
    >
      <PageIntroText>
        <Box>
          <Text animate delay={MotionDelay.xs} hasBgImage rotateDeg={-4}>
            {t('heading_1.request')}
          </Text>
          <Text animate delay={MotionDelay.md}>
            {t('heading_1.quote')}
          </Text>
        </Box>
        <Box>
          <Text animate delay={MotionDelay.md}>
            {t('heading_2.your')}
          </Text>
          <Text animate delay={MotionDelay.xs} hasBgImage rotateDeg={4}>
            {t('heading_2.work')}
          </Text>
        </Box>
      </PageIntroText>
      <Grid container justifyContent={'space-between'} spacing={2}>
        <Grid item xs={12} sm={7} md={6}>
          <ContactDetails />
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <ContactForm />
        </Grid>
      </Grid>
      {/* <FAQs list={faqs} /> */}
    </Container>
  );
};

export default ContactUs;
