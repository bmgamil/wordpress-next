'use client';
import Text from '../Text';
import { useStyles } from './styles';
import { Link } from '@/navigation';

type Props = {
  children: React.ReactNode;
  mode: 'dark' | 'light';
  href?: string;
};
const Tag = (props: Props) => {
  const { mode, href } = props;
  const { classes } = useStyles({ mode, href });

  return (
    <Link href={(href as any) ?? '#'} className={classes.container}>
      <Text textWeight='regular' textColor={mode} textSize='sm'>
        {props.children}
      </Text>
    </Link>
  );
};

export default Tag;
