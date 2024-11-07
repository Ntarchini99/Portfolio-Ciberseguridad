import { Language } from '../types';

interface Props {
  lang: Language['code'];
}

const skills = [
  { name: 'Burp Suite', level: 95 },
  { name: 'Metasploit', level: 90 },
  { name: 'Nmap', level: 85 },
  { name: 'Wireshark', level: 88 },
  { name: 'Python', level: 85 },
  { name: 'Linux', level: 92 }
];

export default function Skills({ lang }: Props) {
  return (
    <section className="py-20 bg-gray-900" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          {lang === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
        </h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}