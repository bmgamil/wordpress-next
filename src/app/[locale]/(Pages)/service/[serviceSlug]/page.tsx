import Text from '@/app/Components/Atoms/Text';
import ServiceDetail from '@/app/Components/Organisms/ServicePage/ServiceDetail';
import { getServices } from '@/app/lib/Controller';

type Props = {
  params: {
    serviceSlug: string;
  };
};

const SingleService = async ({ params: { serviceSlug } }: Props) => {
  const {
    services: { services },
  } = await getServices(serviceSlug);

  return <ServiceDetail service={services} />;
};

export default SingleService;
