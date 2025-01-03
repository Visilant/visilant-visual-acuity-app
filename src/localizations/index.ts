import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { default as resources } from './locales'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', //  ERROR  i18next::pluralResolver: Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.
  resources,
  fallbackLng: 'en',
  lng: 'en', // language detector could be used but we set it in the provider
  interpolation: {
    escapeValue: false
  }
})

export default i18n
