// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations directly
import en from '../locales/en.json';
import ar from '../locales/ar.json';
import ja from '../locales/ja.json';
import hi from '../locales/hi.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      ja: { translation: ja },
      hi: { translation: hi },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;