'use client';
import { Link } from '@/navigation';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import Text from '../Text';
import { useLocale } from 'next-intl';
import useStyles from './style';

type Props = {
  href: string;
  title: string;
};

const CustomLink = (props: Props) => {
  const { href, title } = props;
  const locale = useLocale();
  const isAr = locale === 'ar';
  const { classes } = useStyles();

  return (
    <Link href={href as any} className={classes.container}>
      <Text>{title}</Text>
      {!isAr ? (
        <NorthEastIcon fontSize='small' />
      ) : (
        <NorthWestIcon fontSize='small' />
      )}
    </Link>
  );
};

export default CustomLink;
