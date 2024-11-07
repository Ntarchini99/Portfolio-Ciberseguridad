import { Shield, Terminal, Code2 } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language['code'];
}

export default function Hero({ lang }: Props) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50 z-10" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070')] bg-cover bg-center opacity-20" />
      </div>

      <div className="relative z-20 text-center px-4">
        <div className="flex justify-center mb-6">
          <Shield className="w-16 h-16 text-purple-500" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          {lang === 'es' ? 'Especialista en Ciberseguridad' : 'Cybersecurity Specialist'}
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl mb-8">
          {lang === 'es'
            ? 'Pentesting • Análisis de Vulnerabilidades • Seguridad Ofensiva'
            : 'Pentesting • Vulnerability Analysis • Offensive Security'}
        </p>
        <div className="flex justify-center gap-6">
          <Terminal className="w-8 h-8 text-cyan-400" />
          <Code2 className="w-8 h-8 text-purple-400" />
        </div>
      </div>
    </div>
  );
}