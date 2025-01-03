import { Container } from '@mui/material';
import { getLocale } from 'next-intl/server';

import HomeAboutUs from '../Components/Organisms/HomePage/AboutUs';
import HomeMain from '../Components/Organisms/HomePage/Main';
import HomeProjects from '../Components/Organisms/HomePage/Projects';
import HomeService from '../Components/Organisms/HomePage/Services';
import HomeWorkingSteps from '../Components/Organisms/HomePage/WorkingSteps';
import { getOptions, getProjects, getServices } from '../lib/Controller';
import TickerWithTitle from '../Components/Organisms/AboutPage/TickerWithTitle';

export default async function Home() {
  const locale = await getLocale();
  const isAr = locale === 'ar';

  const [{ projects }, { services }, options] = await Promise.all([
    getProjects(4),
    getServices(),
    getOptions(),
  ]);
  const {
    home: {
      main,
      about_ar,
      about,
      ourWork,
      main_ar,
      ourWork_ar,
      steps_ar,
      steps,
    },
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
      <HomeMain mainOptions={isAr ? main_ar : main} />

      <HomeAboutUs aboutOptions={isAr ? about_ar : about} />
      <HomeService services={services} />
      <TickerWithTitle gallery={options.home.clients_gallary} />
      <HomeWorkingSteps stepsOptions={isAr ? steps_ar : steps} />
      <HomeProjects list={projects} workOptions={isAr ? ourWork_ar : ourWork} />

      {/* <Blogs /> */}
    </Container>
  );
}
