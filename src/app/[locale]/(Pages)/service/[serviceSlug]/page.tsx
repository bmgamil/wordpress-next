import { Metadata } from 'next';

import { getServices } from '@/app/lib/Controller';
import ServiceDetail from '@/app/Components/Organisms/ServicePage/ServiceDetail';
import { notFound } from 'next/navigation';

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

  const seo = services?.seo;

  return {
    ...seo,
  };
};

const SingleService = async ({ params: { serviceSlug } }: Props) => {
  const {
    services: { services },
  } = await getServices(serviceSlug);

  if (!services) {
    notFound();
  }

  return <ServiceDetail service={services} />;
};

export default SingleService;
