'use client';

import LoadingCircular from '@/app/Components/Molecules/Loading/LoadingCircular';
import { Grid } from '@mui/material';

const Loading = () => {
  return (
    <Grid item md={8} xs={12}>
      <LoadingCircular />
    </Grid>
  );
};

export default Loading;
