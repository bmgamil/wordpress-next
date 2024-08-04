'use server';

import { getServices } from '@/app/lib/Controller';
import { redirect } from '@/navigation';
import type { RedirectType } from 'next/navigation';

const Services = async () => {
  const {
    services: { services },
  } = await getServices();

  redirect(`/service/${services[0].slug}` as any, 'replace' as RedirectType);
};

export default Services;
