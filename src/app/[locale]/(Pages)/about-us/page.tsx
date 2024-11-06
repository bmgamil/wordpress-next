import { Metadata } from 'next';
import { Box, Container } from '@mui/material';
import { getLocale, getTranslations } from 'next-intl/server';

import Text from '@/app/Components/Atoms/Text';
import FAQs from '@/app/Components/Organisms/FAQs';
import { MotionDelay } from '@/app/lib/MotionVariants';
import { getFAQS, getOptions, getServices } from '@/app/lib/Controller';
import PageIntroText from '@/app/Components/Organisms/PageIntroText';
import AboutService from '@/app/Components/Organisms/AboutPage/Services';
import Introduction from '@/app/Components/Organisms/AboutPage/Introduction';
import TickerWithTitle from '@/app/Components/Organisms/AboutPage/TickerWithTitle';

export const metadata: Metadata = {
  title: 'About Us',
};

const AboutUs = async () => {
  const locale = await getLocale();
  const t = await getTranslations('about.main');

  const [servicesData, faqs, options] = await Promise.all([
    getServices(),
    getFAQS(),
    getOptions(locale),
  ]);

  const {
    services: { services },
  } = servicesData;

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
          <Text animate delay={MotionDelay.xs}>
            {t('heading_1.we')}
          </Text>
          <Text animate delay={MotionDelay.md} hasBgImage rotateDeg={-4}>
            {t('heading_1.units')}
          </Text>
        </Box>
        <Box>
          <Text animate delay={MotionDelay.md} hasBgImage rotateDeg={-4}>
            {t('heading_2.united')}
          </Text>
          <Text animate delay={MotionDelay.xs}>
            {t('heading_2.in_purpose')}
          </Text>
        </Box>
      </PageIntroText>
      <Introduction />
      <TickerWithTitle gallery={options.home.clients_gallary} />
      <AboutService services={services} />
      <FAQs list={faqs} />
    </Container>
  );
};

export default AboutUs;
