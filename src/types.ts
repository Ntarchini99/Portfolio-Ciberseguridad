export interface Language {
  code: 'es' | 'en';
  label: string;
}

export interface NavItem {
  id: string;
  label: {
    es: string;
    en: string;
  };
}

export interface Service {
  icon: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export interface Testimonial {
  name: string;
  role: {
    es: string;
    en: string;
  };
  company: string;
  image: string;
  content: {
    es: string;
    en: string;
  };
}

export interface Experience {
  title: {
    es: string;
    en: string;
  };
  company: string;
  period: string;
  description: {
    es: string;
    en: string;
  };
}

export interface Project {
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  tags: string[];
  image: string;
}