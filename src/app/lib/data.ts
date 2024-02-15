import BlogBG from '@/../public/image/blog-bg.jpg';
import BlogBG2 from '@/../public/image/blog-bg-2.jpg';
import { makeid } from './handlers';

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

export const Blogs: Blog[] = [
  {
    id: makeid(3),
    title: 'What does your maintenance and support service include?',
    tags: Tags,
    imageSrc: BlogBG2,
  },
  {
    id: makeid(3),
    title: 'What does your maintenance and support service include?',
    tags: Tags,
    imageSrc: BlogBG,
  },
  {
    id: makeid(3),
    title: 'What does your maintenance and support service include?',
    tags: Tags,
    imageSrc: BlogBG,
  },
  {
    id: makeid(3),
    title: 'What does your maintenance and support service include?',
    tags: Tags,
    imageSrc: BlogBG,
  },
  {
    id: makeid(3),
    title: 'What does your maintenance and support service include?',
    tags: Tags,
    imageSrc: BlogBG,
  },
  {
    id: makeid(3),
    title: 'What does your maintenance and support service include?',
    tags: Tags,
    imageSrc: BlogBG,
  },
  {
    id: makeid(3),
    title: 'What does your maintenance and support service include?',
    tags: Tags,
    imageSrc: BlogBG,
  },
];
