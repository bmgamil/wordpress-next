export const revalidate = process.env.NODE_ENV === 'development' ? 0 : 3600;

export const navlinks: Navlink[] = [
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
    title: 'contact-us',
    link: '/contact-us',
  },
];

export const socialLinks: Navlink[] = [
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
