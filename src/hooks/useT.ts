import { useTranslation } from 'react-i18next'

export const useT = (key: string, namespace?: string) => {
  const { t } = useTranslation(namespace)
  return t(key)
}
