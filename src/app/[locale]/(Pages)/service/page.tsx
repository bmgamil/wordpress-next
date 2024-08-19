import { notFound, type RedirectType } from 'next/navigation';

import { redirect } from '@/navigation';
import { AppPathnames } from '@/config';
import { getServices } from '@/app/lib/Controller';

const Services = async () => {
  const {
    services: { services },
  } = await getServices();

  if (!services && !!!services.length) {
    return null;
  }

  redirect(
    `/service/${services[0].slug}` as AppPathnames,
    'replace' as RedirectType
  );
};

export default Services;
