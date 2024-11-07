import { Calendar, Building2 } from 'lucide-react';
import { Language, Experience } from '../types';

interface Props {
  lang: Language['code'];
}

const experiences: Experience[] = [
  {
    title: {
      es: 'Pentester Senior',
      en: 'Senior Pentester'
    },
    company: 'CyberGuard Solutions',
    period: '2021 - Present',
    description: {
      es: 'Lideré evaluaciones de seguridad en infraestructuras críticas y aplicaciones web. Desarrollé metodologías personalizadas de pentesting.',
      en: 'Led security assessments on critical infrastructures and web applications. Developed custom pentesting methodologies.'
    }
  },
  {
    title: {
      es: 'Consultor de Seguridad',
      en: 'Security Consultant'
    },
    company: 'SecureNet Technologies',
    period: '2019 - 2021',
    description: {
      es: 'Realicé auditorías de seguridad y tests de intrusión en más de 50 organizaciones. Especializado en seguridad en la nube.',
      en: 'Performed security audits and penetration tests for over 50 organizations. Specialized in cloud security.'
    }
  },
  {
    title: {
      es: 'Analista de Seguridad',
      en: 'Security Analyst'
    },
    company: 'DataSafe Corp',
    period: '2017 - 2019',
    description: {
      es: 'Implementé soluciones de seguridad y realicé análisis de vulnerabilidades. Desarrollé scripts de automatización para pruebas.',
      en: 'Implemented security solutions and performed vulnerability analysis. Developed automation scripts for testing.'
    }
  }
];

export default function ExperienceTimeline({ lang }: Props) {
  return (
    <section className="py-20 bg-black" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          {lang === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 border-l border-purple-500/20 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-purple-500" />
              <div className="bg-gray-900 p-6 rounded-lg border border-purple-500/20">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">
                    {exp.title[lang]}
                  </h3>
                  <div className="flex items-center text-purple-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <Building2 className="w-4 h-4 mr-2" />
                  {exp.company}
                </div>
                <p className="text-gray-300">{exp.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}