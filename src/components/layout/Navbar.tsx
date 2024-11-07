import { Language } from '../../types';
import { routes } from '../../routes';
import LanguageSwitch from '../common/LanguageSwitch';

interface Props {
  lang: Language['code'];
  onSwitchLang: (lang: Language['code']) => void;
}

export default function Navbar({ lang, onSwitchLang }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0  backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-8">
              {routes.map((route) => (
                <a
                  key={route.id}
                  href={`#${route.id}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  {route.label[lang]}
                </a>
              ))}
            </div>
          </div>
          <LanguageSwitch currentLang={lang} onSwitch={onSwitchLang} />
        </div>
      </div>
    </nav>
  );
}