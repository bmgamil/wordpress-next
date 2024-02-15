'use client';

import { handleFontSize } from '@/app/lib/handlers';
import Text from '../../Atoms/Text';
import { useStyles } from './style';
import { Link, usePathname } from '@/navigation';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

type Props = {
  title: string;
  textSize: FontSize;
  iconSize?: FontSize;
  href: string;
  isAr: boolean;
};

const SingleServiceBlog = (props: Props) => {
  const { title, textSize, iconSize, href, isAr } = props;
  const { classes } = useStyles();
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href as '/'}
      className={`${classes.container} ${isActive && 'active'}`}
    >
      <Text textSize={textSize} textWeight='regular'>
        {title}
      </Text>
      {isAr ? (
        <ArrowCircleLeftOutlinedIcon
          fontSize={iconSize === 'lg' ? 'medium' : 'large'}
        />
      ) : (
        <ArrowCircleRightOutlinedIcon
          fontSize={iconSize === 'lg' ? 'medium' : 'large'}
        />
      )}
    </Link>
  );
};

export default SingleServiceBlog;
