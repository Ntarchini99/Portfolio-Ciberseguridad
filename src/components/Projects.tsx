 import { Github } from 'lucide-react';
import { Language, Project } from '../types';

interface Props {
  lang: Language['code'];
}

const projects: Project[] = [
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

export default function Projects({ lang }: Props) {
  return (
    <section className="py-20 bg-black" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          {lang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-purple-500/20"
            >
              <img
                src={project.image}
                alt={project.title[lang]}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title[lang]}
                </h3>
                <p className="text-gray-300 mb-4">{project.description[lang]}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Ntarchini99"
                    target='blank'
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}