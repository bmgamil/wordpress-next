'use client';

import LoadingCircular from '@/app/Components/Molecules/Loading/LoadingCircular';
import { Box } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        height: '100dvh',
      }}
    >
      <LoadingCircular />;
    </Box>
  );
};

export default Loading;
