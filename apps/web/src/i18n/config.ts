import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import translation resources
import enCommon from '../locales/en/common.json';
import enAuth from '../locales/en/auth.json';
import enCoaching from '../locales/en/coaching.json';
import esCommon from '../locales/es/common.json';
import esAuth from '../locales/es/auth.json';
import esCoaching from '../locales/es/coaching.json';

// Resources for preloaded translations
const resources = {
  en: {
    common: enCommon,
    auth: enAuth,
    coaching: enCoaching,
  },
  es: {
    common: esCommon,
    auth: esAuth,
    coaching: esCoaching,
  },
};

i18n
  // Load translations from server for lazy loading additional namespaces
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    defaultNS: 'common',
    ns: ['common', 'auth', 'coaching'],
    
    detection: {
      // Order and from where user language should be detected
      order: ['localStorage', 'navigator', 'htmlTag'],
      // Cache user language on localStorage
      caches: ['localStorage'],
    },
    
    interpolation: {
      // React already safes from XSS
      escapeValue: false,
    },
    
    react: {
      // Wait for translations to be loaded before rendering
      useSuspense: true,
    },
    
    // Debug mode in development
    debug: process.env.NODE_ENV === 'development',
  });

export default i18n;
