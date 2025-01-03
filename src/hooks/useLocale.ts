import { getLocales } from 'expo-localization'
import i18n from 'i18next'

export const useLocale = () => {
  const deviceLanguage = getLocales()[0].languageCode
  const locale = i18n.languages.includes(deviceLanguage) ? deviceLanguage : i18n.language

  return { locale }
}
