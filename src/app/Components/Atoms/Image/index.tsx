'use client';
import { default as NextImage } from 'next/image';
import useStyles from './styles';
import { ImageProps } from 'next/dist/shared/lib/get-img-props';

type Props = ImageProps & {
  alt?: string;
  className?: string;
  shadow?: boolean;
};

const Image = (props: Props) => {
  const { alt, className, shadow, ...proprties } = props;
  const { classes } = useStyles({
    shadow,
  });
  return (
    <NextImage
      alt={alt ?? ''}
      className={`${classes.img} ${className}`}
      width={650}
      height={650}
      {...proprties}
    />
  );
};

export default Image;
