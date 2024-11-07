import { Quote } from 'lucide-react';
import { Language, Testimonial } from '../types';

interface Props {
  lang: Language['code'];
}

const testimonials: Testimonial[] = [
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

export default function Testimonials({ lang }: Props) {
  return (
    <section className="py-20 bg-gray-900" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          {lang === 'es' ? 'Testimonios' : 'Testimonials'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg border border-purple-500/20 relative"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-purple-500/20" />
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role[lang]} - {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content[lang]}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}