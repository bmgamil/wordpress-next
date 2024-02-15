import Text from '@/app/Components/Atoms/Text';
import CategoryWrapper from '@/app/Components/Organisms/CategoryWrapper';
import ProjectsList from '@/app/Components/Organisms/ProjectsList';

import { getServices } from '@/app/lib/Controller';
import { Box, Container } from '@mui/material';

type Props = {
  params: {
    serviceSlug: string;
  };
};

const Category = async ({ params: { serviceSlug } }: Props) => {
  const {
    services: { services },
  } = await getServices(serviceSlug);

  return (
    <Container>
      <CategoryWrapper service={services} />
    </Container>
  );
};

export default Category;
