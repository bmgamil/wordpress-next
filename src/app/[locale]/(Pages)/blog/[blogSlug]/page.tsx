import { Metadata } from 'next';
import { Container } from '@mui/material';

import Text from '@/app/Components/Atoms/Text';
import { getBlogBySlug } from '@/app/lib/Controller';

type Props = {
  params: { blogSlug: string };
};

export const generateMetadata = async ({
  params: { blogSlug },
}: Props): Promise<Metadata> => {
  const blog: Blog = await getBlogBySlug(blogSlug);
  const seo = blog.seo;

  return {
    ...seo,
  };
};

const CategoryBlogs = async (props: Props) => {
  const slug = props.params.blogSlug;
  const data: Blog = await getBlogBySlug(slug);

  return (
    <Container>
      <Text>{data.title}</Text>
    </Container>
  );
};

export default CategoryBlogs;
