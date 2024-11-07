import { Mail, Github, Linkedin } from 'lucide-react';
import { Language } from '../types';

interface Props {
  lang: Language['code'];
}

export default function Contact({ lang }: Props) {
  return (
    <section className="py-20 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          {lang === 'es' ? 'Contacto' : 'Contact'}
        </h2>
        <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-lg border border-purple-500/20">
          <div className="flex flex-col space-y-6">
            <a
              href="mailto:contact@example.com"
              className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>contact@example.com</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}