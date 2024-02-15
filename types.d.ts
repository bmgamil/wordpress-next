type BorderRadius = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

type BGColor = 'main' | 'light';

type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

type TextTransform = 'none' | 'capitalize' | 'uppercase';

type TextColor = 'main' | 'light' | 'dark';

type FontWeight = 'bold' | 'medium' | 'regular' | 'light';

type Navlink = {
  title: string;
  link: string;
};

type EnMessages = typeof import('./src/messages/en.json');
type ArMessages = typeof import('./src/messages/ar.json');
declare interface IntlMessages extends EnMessages, ArMessages {}

type ServiceBlog = {
  title: string;
  link: string;
};

type WorkingStep = {
  number: string;
  title: string;
  description: string;
};

type SingleContact = {
  title?: string;
  icon: any;
  description: string;
};

type ServiceDetail = {
  id: number;
  title: string;
  type: string;
  slug: string;
  content: string | TrustedHTML;
  projects: Project[];
  featured_media: ProjectMedia;
  faq: { q: string; a: string }[];
};

type Blog = {
  id: string;
  title: string;
  tags: string[];
  imageSrc: string | StaticImageData;
};

type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  comment: string;
};

type Project = {
  id: number;
  title: string;
  type: string;
  slug: string;
  content: string;
  categories: ProjectCategory[];
  featured_media: ProjectMedia;
  services: ProjectCategory[];
};

type ProjectMedia = {
  id: number;
  source_url: string;
  media_details: {
    width: number;
    height: number;
  };
  placeholder: {
    css: {
      backgroundImage: string;
      backgroundSize: string;
      backgroundRepeat: string;
    };
    base64: string;
    metadata: {
      width: number;
      height: number;
    };
    color: {
      r: number;
      g: number;
      b: number;
      hex: color;
    };
  };
};

type ProjectCategory = {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
};
