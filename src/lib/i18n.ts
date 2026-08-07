import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from '../locales/en.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true, // enable debug logging in dev to surface missing keys
    interpolation: {
      escapeValue: false,
    },
  })

// Expose instance for quick runtime debugging in dev only
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any).__i18n = i18n
}

export default i18n

