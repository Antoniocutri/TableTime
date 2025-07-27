import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationIT from 'C:/Users/Utente/Herd/tabletime/lang/it.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      it: {
        translation: translationIT,
      },
    },
    lng: 'it',
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;