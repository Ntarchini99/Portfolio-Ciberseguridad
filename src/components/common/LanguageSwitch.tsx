import { Languages } from 'lucide-react';
import { Language } from '../../types';

interface Props {
  currentLang: Language['code'];
  onSwitch: (lang: Language['code']) => void;
}

export default function LanguageSwitch({ currentLang, onSwitch }: Props) {
  return (
    <button
      onClick={() => onSwitch(currentLang === 'es' ? 'en' : 'es')}
      className="fixed top-4 right-4 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-all"
      aria-label="Switch Language"
    >
      <Languages className="w-5 h-5" />
    </button>
  );
}