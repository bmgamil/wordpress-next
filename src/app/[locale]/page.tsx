import { Box, Container } from '@mui/material';

import Blogs from '../Components/Organisms/HomePage/Blogs';
import HomeMain from '../Components/Organisms/HomePage/Main';
import HomeAboutUs from '../Components/Organisms/HomePage/AboutUs';
import HomeService from '../Components/Organisms/HomePage/Services';
import HomeProjects from '../Components/Organisms/HomePage/Projects';
import HomeWorkingSteps from '../Components/Organisms/HomePage/WorkingSteps';
import { getOptions, getProjects, getServices } from '../lib/Controller';

export default async function Home() {
  const projectsPromise = getProjects(4);
  const servicePromise = getServices();
  const optionsPromise: Promise<options> = getOptions();

  const [
    { projects },
    {
      services: { services },
    },
    options,
  ] = await Promise.all([projectsPromise, servicePromise, optionsPromise]);
  const {
    home: { main, about, ourWork, steps },
  } = options;
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        paddingBottom: '4rem',
      }}
    >
      <HomeMain mainOptions={main} />

      <HomeAboutUs aboutOptions={about} />
      <HomeService services={services} />
      <HomeWorkingSteps stepsOptions={steps} />
      <HomeProjects list={projects} workOptions={ourWork} />

      {/* <Blogs /> */}
    </Container>
  );
}
