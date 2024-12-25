import { getBlogs } from '@/app/lib/Controller';
import BlogsList from '@/app/Components/Organisms/BlogsPage/BlogsList';
import { Metadata } from 'next';

type Props = {
  searchParams: { page?: number };
};

export const metadata: Metadata = {
  title: 'Blogs - UNITS',
};

const AllBlogs = async (props: Props) => {
  const currentPage = props.searchParams.page ?? 1;
  const data = await getBlogs(1, currentPage);
  return (
    <BlogsList
      list={data.blogs}
      total={+data.totalPages}
      path='/blogs'
      currentPage={+currentPage}
    />
  );
};

export default AllBlogs;
