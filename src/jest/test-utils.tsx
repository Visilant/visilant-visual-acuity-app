import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { fireEvent, render, RenderOptions, screen } from '@testing-library/react-native'
import { WrapperProps } from './types'
import { ThemeProvider } from 'styled-components/native'
import { appTheme } from '@components/theme/theme'
import { LocalizationProvider } from '@localizations/Provider'
import { store } from '@store'

const Providers: React.FunctionComponent<WrapperProps> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={appTheme}>
        <LocalizationProvider>{children}</LocalizationProvider>
      </ThemeProvider>
    </ReduxProvider>
  )
}

const customRender = <T,>(
  ui: React.ReactElement<unknown, string | React.JSXElementConstructor<T>>,
  options?: RenderOptions
) => {
  return render(ui, {
    wrapper: Providers,
    ...options
  })
}

export { fireEvent, customRender as render, screen }
