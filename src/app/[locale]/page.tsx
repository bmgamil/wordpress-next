import { Box, Container } from '@mui/material';

import Blogs from '../Components/Organisms/HomePage/Blogs';
import HomeMain from '../Components/Organisms/HomePage/Main';
import ProjectsList from '../Components/Organisms/ProjectsList';
import HomeAboutUs from '../Components/Organisms/HomePage/AboutUs';
import HomeService from '../Components/Organisms/HomePage/Services';
import HomeProjects from '../Components/Organisms/HomePage/Projects';
import HomeWorkingSteps from '../Components/Organisms/HomePage/WorkingSteps';
import { getProjects, getServices } from '../lib/Controller';
import Carousel from '../Components/Organisms/Carousel';
import ProjectCard from '../Components/Organisms/ProjectCard';
import Text from '../Components/Atoms/Text';

export default async function Home() {
  const projectsPromise = getProjects(4);
  const servicePromise = getServices();

  const [
    { projects },
    {
      services: { services },
    },
  ] = await Promise.all([projectsPromise, servicePromise]);

  return (
    <Box
      component='main'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
      }}
    >
      <HomeMain />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
          paddingBottom: '4rem',
        }}
      >
        <HomeAboutUs />
        <HomeService services={services} />
        <HomeWorkingSteps />
        <Box
          component='section'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <HomeProjects />
          {projects && <ProjectsList list={projects} isLatestList />}
        </Box>

        {/* <Blogs /> */}
      </Container>
    </Box>
  );
}
