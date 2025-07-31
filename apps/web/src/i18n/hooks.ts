import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import i18n from './config';

/**
 * Custom hook for using translations with typescript support
 */
export const useTranslation = (namespace: string | string[] = 'common') => {
  const { t, i18n: i18nInstance, ready } = useI18nTranslation(namespace);
  
  return {
    t,
    i18n: i18nInstance,
    ready,
    currentLanguage: i18nInstance.language,
    changeLanguage: i18nInstance.changeLanguage,
    languages: i18nInstance.options.supportedLngs || ['en', 'es'],
  };
};

/**
 * Hook for managing application language
 */
export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  
  // Update state when language changes
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng);
    };
    
    i18n.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);
  
  // Change language
  const changeLanguage = async (lng: string) => {
    if (lng !== currentLanguage) {
      await i18n.changeLanguage(lng);
    }
  };
  
  return {
    currentLanguage,
    changeLanguage,
    languages: i18n.options.supportedLngs?.filter(lng => lng !== 'cimode') || ['en', 'es'],
    isRTL: currentLanguage === 'ar' || currentLanguage === 'he',
  };
};

/**
 * Hook for dynamic loading of translation namespaces
 */
export const useLoadNamespace = (namespace: string | string[]) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const loadNamespace = async () => {
      await i18n.loadNamespaces(namespace);
      setIsLoaded(true);
    };
    
    loadNamespace();
  }, [namespace]);
  
  return isLoaded;
};
