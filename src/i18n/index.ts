import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import pl from './locales/pl.json';
import en from './locales/en.json';

const resources = {
  pl: {
    translation: pl
  },
  en: {
    translation: en
  }
};

// Get language from localStorage or default to 'pl'
const savedLanguage = localStorage.getItem('i18nextLng') || 'pl';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'pl',
    
    interpolation: {
      escapeValue: false // react already does escaping
    },
    
    // Save language to localStorage when changed
    saveMissing: false,
    
    react: {
      useSuspense: false
    }
  });

// Save language to localStorage when it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18n; 