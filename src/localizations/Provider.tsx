import { useLocale } from '@hooks/useLocale'
import i18n from '@localizations'
import React, { FunctionComponent, PropsWithChildren, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'

export const LocalizationProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { locale } = useLocale()

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])

  return (
    <I18nextProvider i18n={i18n} defaultNS={'screens'}>
      {children}
    </I18nextProvider>
  )
}
