import React from 'react';
import { Command, Globe, Settings } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, onOpenSettings }) => {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="h-16 flex items-center justify-between px-4 lg:px-8 bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-xl shadow-lg shadow-violet-500/20 flex items-center justify-center text-white">
          <Command size={18} strokeWidth={3} />
        </div>
        <h1 className="text-lg font-bold tracking-tight text-slate-900 hidden sm:block">
          {UI_TEXT.headerTitle[language]}
        </h1>
        <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:hidden">
          Prompt Master
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleLanguage}
          className="h-10 px-4 flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 group"
        >
          <Globe size={18} className="text-slate-400 group-hover:text-violet-600 transition-colors" strokeWidth={2} />
          <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
            {language === 'en' ? 'English' : '中文'}
          </span>
        </button>

        <button
          onClick={onOpenSettings}
          className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-400 hover:text-slate-900 transition-all duration-200"
          aria-label="Settings"
        >
          <Settings size={20} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
};