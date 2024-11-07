import { Award } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language['code'];
}

const certifications = [
  {
    name: 'OSCP - Offensive Security Certified Professional',
    org: 'Offensive Security',
    year: '2022'
  },
  {
    name: 'CEH - Certified Ethical Hacker',
    org: 'EC-Council',
    year: '2021'
  },
  {
    name: 'CISSP - Certified Information Systems Security Professional',
    org: 'ISC²',
    year: '2020'
  },
  {
    name: 'eJPT - eLearnSecurity Junior Penetration Tester',
    org: 'eLearnSecurity',
    year: '2019'
  }
];

export default function Certifications({ lang }: Props) {
  return (
    <section className="py-20 bg-gray-900" id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          {lang === 'es' ? 'Certificaciones' : 'Certifications'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg border border-purple-500/20 flex items-start"
            >
              <Award className="w-8 h-8 text-purple-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm">{cert.org}</p>
                <p className="text-purple-400 text-sm">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}