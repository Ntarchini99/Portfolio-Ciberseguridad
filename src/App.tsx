import { useState } from 'react';
import { Language } from './types';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const [lang, setLang] = useState<Language['code']>('es');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar lang={lang} onSwitchLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Certifications lang={lang} />
        <Testimonials lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
}

export default App;