import { Metadata } from 'next';
import { Box, Container } from '@mui/material';
import { getTranslations } from 'next-intl/server';

import Text from '@/app/Components/Atoms/Text';
import { getServices } from '@/app/lib/Controller';
import { MotionDelay } from '@/app/lib/MotionVariants';
import PageIntroText from '@/app/Components/Organisms/PageIntroText';
import ServicePageServices from '@/app/Components/Organisms/ServicePage/Services';

export const metadata: Metadata = {
  title: {
    default: 'Services',
    template: '%s - Services',
  },
};

const ServicesLayout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getTranslations('services');
  const {
    services: { services },
  } = await getServices();

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
            {t('main.heading_1.we')}
          </Text>
          <Text hasBgImage rotateDeg={-4} animate delay={MotionDelay.md}>
            {t('main.heading_1.always')}
          </Text>
          <Text animate delay={MotionDelay.lg}>
            {t('main.heading_1.provide')}
          </Text>
        </Box>
        <Box>
          <Text animate delay={MotionDelay.lg}>
            {t('main.heading_2.best')}
          </Text>
          <Text hasBgImage rotateDeg={-4} animate delay={MotionDelay.md}>
            {t('main.heading_2.service')}
          </Text>
          <Text animate delay={MotionDelay.xs}>
            {t('main.heading_2.for_you')}
          </Text>
        </Box>
      </PageIntroText>
      <ServicePageServices services={services}>{children}</ServicePageServices>
    </Container>
  );
};

export default ServicesLayout;
