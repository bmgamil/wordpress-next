'use client';

import { Box, useTheme } from '@mui/material';
import Logo from '../../Atoms/Logo';
import Text from '../../Atoms/Text';
import { ClashDisplay } from '@/app/theme/theme';

const LoadingCircular = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <Logo />
      <Text
        textSize='3xl'
        textWeight='medium'
        hasGradientBG
        textTransform='capitalize'
        fontFamily={ClashDisplay.style.fontFamily}
      >
        UNITS
      </Text>
    </Box>
  );
};

export default LoadingCircular;
