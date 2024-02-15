'use client';

import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';

import { useStyles } from './style';
import Text from '../../Atoms/Text';
import Image from '../../Atoms/Image';
import Button from '../../Atoms/Button';
import TagsSlider from '../../Molecules/TagsSlider';
import CustomLink from '../../Atoms/Link';

type Props = {
  blog: Blog;
};

const BlogCard = (props: Props) => {
  const {
    blog: { imageSrc, tags, title },
  } = props;

  const bt = useTranslations('buttons');
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.image}>
        <Image src={imageSrc} placeholder='blur' alt='blog' />
      </Box>
      {/* <TagsSlider mode='light' tags={tags} /> */}
      <Text textSize='base' textWeight='medium'>
        {title}
      </Text>
      <CustomLink href='/' title={bt('read')} />
    </Box>
  );
};

export default BlogCard;
