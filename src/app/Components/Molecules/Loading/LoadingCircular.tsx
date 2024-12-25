'use client';

import { Box } from '@mui/material';
import Logo from '../../Atoms/Logo';
import Text from '../../Atoms/Text';
import { useTranslations } from 'next-intl';

const LoadingCircular = () => {
  const t = useTranslations();
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
      >
        UNITS
      </Text>
    </Box>
  );
};

export default LoadingCircular;
