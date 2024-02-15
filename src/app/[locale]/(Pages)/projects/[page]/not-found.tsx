import Text from '@/app/Components/Atoms/Text';
import { Container } from '@mui/material';

const NotFound = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Text hasBgImage textWeight='bold' textSize='4xl'>
        404
      </Text>
      <Text
        hasGradientBG
        textTransform='capitalize'
        textWeight='bold'
        textSize='4xl'
      >
        Not Found
      </Text>
    </Container>
  );
};

export default NotFound;
