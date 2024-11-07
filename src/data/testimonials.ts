import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    name: 'Carlos Rodriguez',
    role: {
      es: 'Director de Seguridad',
      en: 'Security Director'
    },
    company: 'TechSecure Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop',
    content: {
      es: 'Un profesional excepcional en ciberseguridad. Su experiencia en pentesting nos ayudó a identificar vulnerabilidades críticas que habían pasado desapercibidas.',
      en: 'An exceptional cybersecurity professional. Their pentesting expertise helped us identify critical vulnerabilities that had gone unnoticed.'
    }
  },
  {
    name: 'Sarah Chen',
    role: {
      es: 'CTO',
      en: 'CTO'
    },
    company: 'DataGuard Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop',
    content: {
      es: 'Su enfoque metódico y exhaustivo en las pruebas de penetración superó nuestras expectativas. Altamente recomendado.',
      en: 'Their methodical and thorough approach to penetration testing exceeded our expectations. Highly recommended.'
    }
  },
  {
    name: 'Miguel Ángel Torres',
    role: {
      es: 'Líder de Infraestructura',
      en: 'Infrastructure Lead'
    },
    company: 'CyberShield',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop',
    content: {
      es: 'Un experto que combina habilidades técnicas excepcionales con una gran capacidad de comunicación. Los informes detallados fueron invaluables.',
      en: 'An expert who combines exceptional technical skills with great communication abilities. The detailed reports were invaluable.'
    }
  }
];