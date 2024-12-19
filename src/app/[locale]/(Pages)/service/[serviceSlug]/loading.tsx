'use client';

import ServiceSkeleton from '@/app/Components/Molecules/ServiceSkeleton';
import { Grid } from '@mui/material';

const Loading = () => {
  return (
    <Grid item md={8} xs={12}>
      <ServiceSkeleton />
    </Grid>
  );
};

export default Loading;
