import { Metadata } from 'next';
import Text from '@/app/Components/Atoms/Text';
import { getCategoryBlogs } from '@/app/lib/Controller';
import BlogsList from '@/app/Components/Organisms/BlogsPage/BlogsList';

type Props = {
  searchParams: { page?: number };
  params: { blogSlug: string };
};

export const generateMetadata = async ({
  params,
  searchParams,
}: Props): Promise<Metadata> => {
  const slug = params.blogSlug;
  const currentPage = searchParams.page ?? 1;

  const data: { seo: SEO } = await getCategoryBlogs(slug, 3, currentPage);
  const seo = data.seo;

  return {
    ...seo,
  };
};

const CategoryBlogs = async (props: Props) => {
  const currentPage = props.searchParams.page ?? 1;
  const slug = props.params.blogSlug;
  const data: { blogs: Blog[]; totalPages: number } = await getCategoryBlogs(
    slug,
    1,
    currentPage
  );

  if (data.blogs && data.blogs?.length <= 0) {
    return <Text>No Blogs Available</Text>;
  }

  return (
    <BlogsList
      list={data.blogs}
      total={+data.totalPages}
      path={`/blogs/${slug}`}
      currentPage={Number(currentPage)}
    />
  );
};

export default CategoryBlogs;
