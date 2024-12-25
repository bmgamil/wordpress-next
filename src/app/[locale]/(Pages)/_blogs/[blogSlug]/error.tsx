'use client';
import Error from '@/app/Components/Organisms/ErrorBoundry';

const ErrorBoundry = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return <Error error={error} reset={reset} />;
};

export default ErrorBoundry;
