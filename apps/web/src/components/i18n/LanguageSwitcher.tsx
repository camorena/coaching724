import React from 'react';
import { useLanguage } from '../../i18n/hooks';

const languageNames: Record<string, string> = {
  en: 'English',
  es: 'Español',
};

const languageFlags: Record<string, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
};

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'buttons' | 'minimal';
  showFlags?: boolean;
  showNames?: boolean;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'dropdown',
  showFlags = true,
  showNames = true,
  className = '',
}) => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  
  if (variant === 'buttons') {
    return (
      <div className={`flex space-x-2 ${className}`}>
        {languages.map((lng) => (
          <button
            key={lng}
            onClick={() => changeLanguage(lng)}
            className={`px-3 py-1 rounded-md transition-colors ${
              currentLanguage === lng
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            aria-label={`Switch to ${languageNames[lng] || lng}`}
          >
            {showFlags && <span className="mr-1">{languageFlags[lng]}</span>}
            {showNames && languageNames[lng]}
            {!showNames && !showFlags && lng.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }
  
  if (variant === 'minimal') {
    return (
      <button
        onClick={() => {
          const nextLang = languages.find(lng => lng !== currentLanguage) || 'en';
          changeLanguage(nextLang);
        }}
        className={`px-2 py-1 rounded-md hover:bg-gray-100 ${className}`}
        aria-label="Switch language"
      >
        {showFlags && languageFlags[currentLanguage]}
        {showNames && (
          <span className="ml-1">{languageNames[currentLanguage]}</span>
        )}
        {!showFlags && !showNames && currentLanguage.toUpperCase()}
      </button>
    );
  }
  
  // Default: dropdown
  return (
    <div className={`relative inline-block text-left ${className}`}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          id="language-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            const dropdown = document.getElementById('language-dropdown');
            if (dropdown) {
              dropdown.classList.toggle('hidden');
            }
          }}
        >
          {showFlags && <span className="mr-1">{languageFlags[currentLanguage]}</span>}
          {showNames && languageNames[currentLanguage]}
          {!showNames && !showFlags && currentLanguage.toUpperCase()}
          
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      
      <div
        className="hidden origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="language-menu"
        id="language-dropdown"
      >
        <div className="py-1" role="none">
          {languages.map((lng) => (
            <button
              key={lng}
              onClick={() => {
                changeLanguage(lng);
                const dropdown = document.getElementById('language-dropdown');
                if (dropdown) {
                  dropdown.classList.add('hidden');
                }
              }}
              className={`${
                currentLanguage === lng ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100`}
              role="menuitem"
            >
              {showFlags && <span className="mr-2">{languageFlags[lng]}</span>}
              {languageNames[lng] || lng}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
