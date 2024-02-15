'use client';
import Error from '@/app/Components/Organisms/ErrorBoundry';
import { Grid } from '@mui/material';

const ErrorBoundry = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <Grid item md={8} xs={12}>
      <Error error={error} reset={reset} />
    </Grid>
  );
};

export default ErrorBoundry;
