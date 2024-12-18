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
    blog: { featured_media, title, categories, slug },
  } = props;

  const { source_url, media_details } = featured_media;

  const bt = useTranslations('buttons');
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.image}>
        <Image
          src={source_url}
          width={media_details.width}
          height={media_details.height}
          // placeholder='blur'
          // blurDataURL={placeholder.base64}
          alt='blog'
        />
      </Box>
      {categories && <TagsSlider isBlog mode='light' tags={categories} />}
      <Text textSize='base' textWeight='medium'>
        {title}
      </Text>
      <CustomLink href={`/blog/${slug}`} title={bt('read')} />
    </Box>
  );
};

export default BlogCard;
