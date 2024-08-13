'use client';
import { Link } from '@/navigation';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import Text from '../Text';
import { useLocale } from 'next-intl';
import useStyles from './style';
import { AppPathnames } from '@/config';

type Props = {
  href: string;
  title: string;
  textSize?: FontSize;
  className?: string;
};

const CustomLink = (props: Props) => {
  const { href, title, textSize, className } = props;
  const locale = useLocale();
  const isAr = locale === 'ar';
  const { classes } = useStyles();

  return (
    <Link
      href={href as AppPathnames}
      className={`${classes.container} ${className}`}
    >
      <Text textSize={textSize}>{title}</Text>
      {!isAr ? (
        <NorthEastIcon fontSize='small' />
      ) : (
        <NorthWestIcon fontSize='small' />
      )}
    </Link>
  );
};

export default CustomLink;
