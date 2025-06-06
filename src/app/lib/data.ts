export const revalidate = Number(process.env.NEXT_REVALIDATE_INTERVAL);

export const navlinks: NavLink[] = [
  {
    title: 'home',
    link: '/',
  },
  {
    title: 'service',
    link: '/service',
  },
  {
    title: 'projects',
    link: '/projects',
  },
  // {
  //   title: 'blogs',
  //   link: '/blogs',
  // },
  {
    title: 'about-us',
    link: '/about-us',
  },
  {
    title: 'contact',
    link: '/contact',
  },
];

export const socialLinks: NavLink[] = [
  {
    title: 'linkedin',
    link: '/',
  },
  {
    title: 'facebook',
    link: '/',
  },
  {
    title: 'instagram',
    link: '/',
  },
  {
    title: 'dribble',
    link: '/',
  },
];

export const Tags = [
  'Dashboard',
  'UI/UX',
  'Web Development',
  'Mobile Apps',
  'E-Commerce',
  'Graphic',
  'Social',
];

export const blogCategoryList: ServiceBlog[] = [
  {
    title: 'all',
    link: '#',
  },
  {
    title: 'pm',
    link: '#',
  },
  {
    title: 'technology',
    link: '#',
  },
  {
    title: 'development',
    link: '#',
  },
  {
    title: 'education',
    link: '#',
  },
];
