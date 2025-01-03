import { useTranslation } from 'react-i18next'

export const useTranslatedOrRaw = (
  value: string | undefined,
  namespace: string | undefined,
  isRaw: boolean | undefined
): string => {
  const { t } = useTranslation(namespace)

  if (value === undefined) {
    return ''
  }

  if (isRaw) {
    return value
  }

  return t(value)
}
