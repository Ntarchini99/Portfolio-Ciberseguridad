import { useState, useEffect } from 'react';
import { Language } from '../../types';
import { routes } from '../../routes';
import LanguageSwitch from '../common/LanguageSwitch';
import { Menu, X, CircuitBoard } from 'lucide-react';

interface Props {
  lang: Language['code'];
  onSwitchLang: (lang: Language['code']) => void;
}

export default function Navbar({ lang, onSwitchLang }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-black/70 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <CircuitBoard className="w-8 h-8 text-purple-500" />
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1">
              {routes.map((route) => (
                <a
                  key={route.id}
                  href={`#${route.id}`}
                  className="relative px-4 py-2 text-gray-300 hover:text-purple-400 transition-colors text-sm group"
                >
                  <span className="relative z-10">{route.label[lang]}</span>
                  <div className="absolute inset-0 bg-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitch currentLang={lang} onSwitch={onSwitchLang} />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
            }`}
        >
          <div className="py-4 space-y-2">
            {routes.map((route) => (
              <a
                key={route.id}
                href={`#${route.id}`}
                className="block px-4 py-2 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 rounded-lg transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {route.label[lang]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </nav>
  );
}