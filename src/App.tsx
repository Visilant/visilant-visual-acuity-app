import { WrappedThemeProvider } from '@components/theme/Provider'
import {
  LibreFranklin_200ExtraLight,
  LibreFranklin_400Regular,
  LibreFranklin_500Medium,
  LibreFranklin_600SemiBold,
  LibreFranklin_800ExtraBold,
  LibreFranklin_700Bold,
  LibreFranklin_900Black
} from '@expo-google-fonts/libre-franklin'
import { LocalizationProvider } from '@localizations/Provider'
import { NavigationContainer } from '@react-navigation/native'
import { persistor, store } from '@store'
import { useFonts } from 'expo-font'
import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { RootServices } from '@RootServices'
import { Snackbar } from '@components/Snackbar'
import { MainStack } from '@screens/MainStack'
import * as SplashScreen from 'expo-splash-screen'
import { ReduxNetworkProvider } from 'react-native-offline'
import { networkStateConfig } from '@shared/network-state'
import { linking } from '@screens/Linking'

SplashScreen.preventAutoHideAsync()

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Libre-Franklin-ExtraLight': LibreFranklin_200ExtraLight,
    'Libre-Franklin-Regular': LibreFranklin_400Regular,
    'Libre-Franklin-Medium': LibreFranklin_500Medium,
    'Libre-Franklin-SemiBold': LibreFranklin_600SemiBold,
    'Libre-Franklin-Bold': LibreFranklin_700Bold,
    'Libre-Franklin-ExtraBold': LibreFranklin_800ExtraBold,
    'Libre-Franklin-Black': LibreFranklin_900Black,
    Caprasimo: require('./assets/fonts/Caprasimo-Regular.ttf')
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setTimeout(SplashScreen.hideAsync, 500)
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) return null

  return (
    <Provider store={store}>
      <ReduxNetworkProvider {...networkStateConfig}>
        <PersistGate loading={null} persistor={persistor}>
          <LocalizationProvider>
            <WrappedThemeProvider>
              <SafeAreaProvider>
                <NavigationContainer linking={linking}>
                  <MainStack />
                  <RootServices />
                  <Snackbar />
                </NavigationContainer>
              </SafeAreaProvider>
            </WrappedThemeProvider>
          </LocalizationProvider>
        </PersistGate>
      </ReduxNetworkProvider>
    </Provider>
  )
}

export default App
