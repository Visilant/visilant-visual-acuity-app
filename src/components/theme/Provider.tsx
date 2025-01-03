import { useCustomTheme } from '@hooks/useCustomTheme'
import React, { FunctionComponent, PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components/native'

export const WrappedThemeProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const theme = useCustomTheme()
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
