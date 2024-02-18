import { Metadata } from 'next';
import { Box, Container } from '@mui/material';

import { getServices } from '@/app/lib/Controller';
import CategoryWrapper from '@/app/Components/Organisms/CategoryWrapper';

type Props = {
  params: {
    serviceSlug: string;
  };
};

export const generateMetadata = async ({
  params: { serviceSlug },
}: Props): Promise<Metadata> => {
  const {
    services: { services },
  } = await getServices(serviceSlug);

  const seo = services.seo;

  return {
    ...seo,
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
