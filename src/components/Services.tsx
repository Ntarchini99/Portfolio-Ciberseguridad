import { Shield, Bug, Lock, Search, Server, Code, Cloud, FileWarning, Wifi, Database, Laptop, BookOpen } from 'lucide-react';
import { Language, Service } from '../types';

const services: Service[] = [
  {
    icon: 'Bug',
    title: {
      es: 'Pentesting Web',
      en: 'Web Pentesting'
    },
    description: {
      es: 'Identificación y explotación de vulnerabilidades en aplicaciones web y APIs',
      en: 'Identification and exploitation of vulnerabilities in web applications and APIs'
    }
  },
  {
    icon: 'Shield',
    title: {
      es: 'Tests de Intrusión',
      en: 'Penetration Testing'
    },
    description: {
      es: 'Evaluaciones completas de seguridad en infraestructuras y redes',
      en: 'Complete security assessments on infrastructures and networks'
    }
  },
  {
    icon: 'Search',
    title: {
      es: 'Análisis de Vulnerabilidades',
      en: 'Vulnerability Analysis'
    },
    description: {
      es: 'Escaneo y evaluación detallada de sistemas y aplicaciones',
      en: 'Detailed scanning and assessment of systems and applications'
    }
  },
  {
    icon: 'Cloud',
    title: {
      es: 'Seguridad Cloud',
      en: 'Cloud Security'
    },
    description: {
      es: 'Auditorías de seguridad en AWS, Azure y Google Cloud Platform',
      en: 'Security audits for AWS, Azure, and Google Cloud Platform'
    }
  },
  {
    icon: 'FileWarning',
    title: {
      es: 'Análisis de Malware',
      en: 'Malware Analysis'
    },
    description: {
      es: 'Análisis y reversing de malware, investigación de amenazas',
      en: 'Malware analysis and reversing, threat research'
    }
  },
  {
    icon: 'Wifi',
    title: {
      es: 'Seguridad Wireless',
      en: 'Wireless Security'
    },
    description: {
      es: 'Auditorías de redes WiFi y pruebas de penetración wireless',
      en: 'WiFi network audits and wireless penetration testing'
    }
  },
  {
    icon: 'Database',
    title: {
      es: 'Seguridad de Datos',
      en: 'Data Security'
    },
    description: {
      es: 'Protección de datos sensibles, cifrado y cumplimiento normativo',
      en: 'Sensitive data protection, encryption, and compliance'
    }
  },
  {
    icon: 'Laptop',
    title: {
      es: 'Forense Digital',
      en: 'Digital Forensics'
    },
    description: {
      es: 'Investigación de incidentes y análisis forense digital',
      en: 'Incident investigation and digital forensic analysis'
    }
  },
  {
    icon: 'BookOpen',
    title: {
      es: 'Formación y Consultoría',
      en: 'Training & Consulting'
    },
    description: {
      es: 'Capacitación en seguridad y asesoramiento estratégico',
      en: 'Security training and strategic consulting'
    }
  }
];

const iconMap = {
  Bug,
  Shield,
  Lock,
  Search,
  Server,
  Code,
  Cloud,
  FileWarning,
  Wifi,
  Database,
  Laptop,
  BookOpen
};

interface Props {
  lang: Language['code'];
}

export default function Services({ lang }: Props) {
  return (
    <section className="py-20 bg-black" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          {lang === 'es' ? 'Servicios' : 'Services'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all group"
              >
                <IconComponent className="w-12 h-12 text-purple-500 mb-4 group-hover:text-cyan-400 transition-colors" />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title[lang]}
                </h3>
                <p className="text-gray-400">
                  {service.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}