'use client';
import { AppPathnames } from '@/config';
import Text from '../Text';
import { useStyles } from './styles';
import { Link } from '@/navigation';
import { MouseEvent, MouseEventHandler } from 'react';

type Props = {
  children: React.ReactNode;
  mode: 'dark' | 'light';
  color?: 'dark' | 'light';
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void;
};
const Tag = (props: Props) => {
  const { mode, href, onClick, color } = props;
  const { classes } = useStyles({ mode, href });

  return (
    <Link
      href={(href as AppPathnames) ?? '#'}
      draggable='false'
      className={classes.container}
      onClick={(e) => onClick && onClick(e)}
    >
      <Text textWeight='regular' textColor={color ?? mode} textSize='sm'>
        {props.children}
      </Text>
    </Link>
  );
};

export default Tag;
