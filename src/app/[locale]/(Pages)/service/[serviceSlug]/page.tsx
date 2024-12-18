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
  const { services } = await getServices(serviceSlug);

  const seo = services?.yoast_head_json;

  return {
    ...seo,
  };
};

const SingleService = async ({ params: { serviceSlug } }: Props) => {
  const { services } = await getServices(serviceSlug);

  // if (!services) {
  //   notFound();
  // }

  return <ServiceDetail service={services} />;
};

export default SingleService;
