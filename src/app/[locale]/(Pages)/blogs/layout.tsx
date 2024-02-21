import { getTranslations } from 'next-intl/server';
import { Box, Container, Grid } from '@mui/material';

import Text from '@/app/Components/Atoms/Text';
import { MotionDelay } from '@/app/lib/MotionVariants';
import { getCategoriesList } from '@/app/lib/Controller';
import BlogSearch from '@/app/Components/Organisms/BlogSearch';
import PageIntroText from '@/app/Components/Organisms/PageIntroText';
import ServicesBlogsList from '@/app/Components/Organisms/ServicesList';

const BlogsLayout = async ({ children }: { children: React.ReactNode }) => {
  const t = await getTranslations('blogs.main');
  const categoriesList = await getCategoriesList();

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
            {t('heading.our')}
          </Text>
          <Text animate delay={MotionDelay.md} hasBgImage rotateDeg={-4}>
            {t('heading.blogs')}
          </Text>
        </Box>
      </PageIntroText>
      <Grid container columnSpacing={4} rowGap={4}>
        <Grid item xs={12}>
          <BlogSearch />
        </Grid>

        <Grid item xs={12} md={4}>
          <ServicesBlogsList
            isBlog
            list={categoriesList}
            textSize='base'
            iconSize='lg'
          />
        </Grid>

        <Grid item xs={12} md={8}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogsLayout;
