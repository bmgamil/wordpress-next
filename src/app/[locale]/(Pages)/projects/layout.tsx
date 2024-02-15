import { Box, Container } from '@mui/material';
import { getTranslations } from 'next-intl/server';

import Text from '@/app/Components/Atoms/Text';
import { MotionDelay } from '@/app/lib/MotionVariants';
import PageIntroText from '@/app/Components/Organisms/PageIntroText';

const ProjectsLayout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getTranslations('projects.main');

  return (
    <Container
      component='main'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        paddingBottom: '4rem',
        minHeight: '100dvh',
      }}
    >
      <PageIntroText>
        <Box>
          <Text animate delay={MotionDelay.xs} hasBgImage rotateDeg={-4}>
            {t('heading_1.latest')}
          </Text>
          <Text animate delay={MotionDelay.md}>
            {t('heading_1.project')}
          </Text>
        </Box>
        <Box>
          <Text animate delay={MotionDelay.md}>
            {t('heading_2.our_clients')}
          </Text>
          <Text animate delay={MotionDelay.xs} hasBgImage rotateDeg={4}>
            {t('heading_2.success')}
          </Text>
        </Box>
      </PageIntroText>
      {children}
    </Container>
  );
};

export default ProjectsLayout;
