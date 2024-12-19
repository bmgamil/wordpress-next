type BorderRadius = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

type BGColor = 'main' | 'light';

type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

type TextTransform = 'none' | 'capitalize' | 'uppercase';

type TextColor = 'main' | 'light' | 'dark';

type FontWeight = 'bold' | 'medium' | 'regular' | 'light';

type NavLink = {
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
  title: string;
  description: string;
  image: optionMedia;
};

type SingleContact = {
  title?: string;
  icon: any;
  description: string;
  link: string;
};

type ServiceDetail = {
  id: number;
  name: string;
  type: string;
  slug: string;
  description: string | TrustedHTML;
  projects: Project[];
  acf: {
    featured_media: ProjectMedia;

    faq: FAQ[];
  };
  yoast_head_json: SEO;
};

type Blog = {
  id: number;
  title: string;
  type: string;
  slug: string;
  content: string;
  categories: ProjectCategory[];
  featured_media: ProjectMedia;
  seo: SEO;
};

type BlogCategory = {
  id: number;
  name: string;
  slug: string;
  posts?: Blog[];
  seo?: SEO;
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
  seo: SEO;
  acf: {
    related_projects: number[];
  };
  related_projects: Project[];
};

type ProjectMedia = {
  id: number;
  source_url: string;
  media_details: {
    width: number;
    height: number;
  };
  // placeholder: Placeholder;
};

type ProjectCategory = {
  id: number;
  name?: string;
  title?: string;
  slug: string;
  taxonomy?: string;
};

type SEO = {
  title: string;
  robots: string | Robots | null | undefined;
  openGraph: {
    locale: string;
    type: string;
    title: string;
    url: string;
    siteName: string;

    images: [
      {
        width: number;
        height: number;
        url: string;
        type: string;
      }
    ];
  };
};

type FAQ = {
  id?: string;
  q: string;
  a: string;
};

type optionMedia = {
  id: number;
  title: string;
  url: string;
  link: string;
  width: number;
  height: number;
  // placeholder: Placeholder;
};

type optionFooterLinks = {
  icon?: optionMedia;
  text: string;
  url: string;
};

type options = {
  header: {
    logo: optionMedia;
    logo_ar: optionMedia;
  };
  footer: {
    // logo: optionMedia;
    social: optionFooterLinks[];
    social_ar: optionFooterLinks[];
    contactUs: optionFooterLinks[];
    contactUs_ar: optionFooterLinks[];
  };
  home: {
    main: {
      title: string;
      description: string;
      image: optionMedia;
    };
    main_ar: {
      title: string;
      description: string;
      image: optionMedia;
    };
    about: {
      description: string;
      image: optionMedia;
    };
    about_ar: {
      description: string;
      image: optionMedia;
    };
    steps: WorkingStep[];
    steps_ar: WorkingStep[];
    ourWork: {
      title: string;
      description: string;
    };
    ourWork_ar: {
      title: string;
      description: string;
    };
    clients_gallary: optionMedia[];
  };
};

type Placeholder = {
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
