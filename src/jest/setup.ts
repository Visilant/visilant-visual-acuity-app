import 'react-native-gesture-handler/jestSetup'

jest.mock(
  'react-native-safe-area-context',
  () => jest.requireActual('react-native-safe-area-context/jest/mock').default
)

jest.mock('redux-persist-expo-filesystem', () => ({}))
jest.mock('redux-persist', () => ({
  ...jest.requireActual('redux-persist'),
  persistReducer: (_, reducer) => reducer
}))

jest.mock('@config', () => ({
  AppConfig: { getConfig: () => ({ apiBaseUrl: 'apiBaseUrl', authApiBaseUrl: 'authApiBaseUrl' }) }
}))

jest.mock('@hooks/useLocale', () => ({ useLocale: () => 'en' }))
