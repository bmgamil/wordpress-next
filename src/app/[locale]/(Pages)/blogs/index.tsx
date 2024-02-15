import { useTranslations } from 'next-intl';
import { Box, Container, Grid } from '@mui/material';

import Text from '@/app/Components/Atoms/Text';
import { blogCategoryList } from '@/app/lib/data';
import { MotionDelay } from '@/app/lib/MotionVariants';
import PageIntroText from '@/app/Components/Organisms/PageIntroText';
import BlogsList from '@/app/Components/Organisms/BlogsPage/BlogsList';
import ServicesBlogsList from '@/app/Components/Organisms/ServicesList';

const Blogs = () => {
  const t = useTranslations('blogs.main');
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
        <Grid item xs={12} md={4}>
          {/* <ServicesBlogsList
            isBlog
            list={blogCategoryList}
            textSize='base'
            iconSize='lg'
          /> */}
        </Grid>

        <Grid item xs={12} md={8}>
          <BlogsList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blogs;
