'use client';

import { Box } from '@mui/material';

const BluredCircle = () => {
  return (
    <Box
      sx={{
        width: '60%',
        height: { md: '20dvh', xs: '40dvh' },
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: 'translate(-50%,-50%)',
        backgroundColor: (theme) => theme.palette.primary.main,
        filter: 'blur(100px)',
        zIndex: -1,
        borderRadius: '50%',
        opacity: 0.4,
      }}
    />
  );
};

export default BluredCircle;
