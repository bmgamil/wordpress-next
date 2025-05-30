import Text from '@/app/Components/Atoms/Text';
import { Colors } from '@/app/theme/colors';
import { Link } from '@/navigation';
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
        a: {
          color: Colors.primary,
        },
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

      <Link href='/'>
        <Text hasGradientBG textSize='lg' textTransform='capitalize'>
          Back to home
        </Text>
      </Link>
    </Container>
  );
};

export default NotFound;
