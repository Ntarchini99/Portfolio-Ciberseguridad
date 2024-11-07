import { Project } from '../types';

export const projects: Project[] = [
  {
    title: {
      es: 'Framework de Automatización de Pentesting',
      en: 'Pentesting Automation Framework'
    },
    description: {
      es: 'Desarrollo de un framework personalizado para automatizar pruebas de penetración web utilizando Python y Docker.',
      en: 'Development of a custom framework for automating web penetration testing using Python and Docker.'
    },
    tags: ['Python', 'Docker', 'Security'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&h=300&fit=crop'
  },
  {
    title: {
      es: 'Análisis de Malware en Tiempo Real',
      en: 'Real-time Malware Analysis'
    },
    description: {
      es: 'Sistema de análisis de malware en tiempo real con capacidades de machine learning para detección de amenazas.',
      en: 'Real-time malware analysis system with machine learning capabilities for threat detection.'
    },
    tags: ['Machine Learning', 'Python', 'Security'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&h=300&fit=crop'
  }
];