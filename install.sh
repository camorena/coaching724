#!/bin/bash
set -eo pipefail

# Text styling
BOLD='\033[1m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Helper functions
log_step() {
  echo -e "${BOLD}${BLUE}==> $1${NC}"
}

log_success() {
  echo -e "${GREEN}✓ $1${NC}"
}

# Create file function
create_file() {
  mkdir -p "$(dirname "$1")"
  cat > "$1" && log_success "Created/updated $1"
}

# Paths
WEB_APP_DIR="apps/web"
SRC_DIR="$WEB_APP_DIR/src"
COMPONENTS_DIR="$SRC_DIR/components"

# Update the LanguageSelector component
log_step "Creating enhanced LanguageSelector component"

create_file "$COMPONENTS_DIR/language/LanguageSelector.tsx" << 'EOF'
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
];

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
    localStorage.setItem('userLanguage', code);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, code?: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (code) {
        changeLanguage(code);
      } else {
        setIsOpen(!isOpen);
      }
    } else if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="flex items-center justify-between gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="flex items-center gap-2">
          <span className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden border border-foreground/10 bg-white/80">
            <span className="text-xs uppercase">{currentLanguage.code}</span>
          </span>
          <span className="hidden md:inline">{currentLanguage.nativeName}</span>
        </span>
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 text-foreground/60"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-foreground/10 backdrop-blur-sm z-50 overflow-hidden"
            role="listbox"
            aria-label="Select language"
          >
            <div className="py-1.5">
              {languages.map((language) => (
                <div key={language.code} className="px-1">
                  <button
                    onClick={() => changeLanguage(language.code)}
                    onKeyDown={(e) => handleKeyDown(e, language.code)}
                    className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${
                      language.code === i18n.language 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'hover:bg-foreground/5 text-foreground/80 hover:text-foreground'
                    }`}
                    role="option"
                    aria-selected={language.code === i18n.language}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden border border-foreground/10 bg-white/80">
                          <span className="text-xs uppercase">{language.code}</span>
                        </span>
                        <span>{language.nativeName}</span>
                      </div>
                      
                      {language.code === i18n.language && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
EOF

log_success "Enhanced language selector implementation complete!"