import { HTTPMethod } from 'react-native-offline/dist/src/types'

export const DEFAULT_PING_SERVER_URL = 'https://www.google.com/'

export const networkStateConfig = {
  pingTimeout: 3000,
  shouldPing: true,
  pingInterval: 3000,
  pingOnlyIfOffline: true,
  pingInBackground: false,
  httpMethod: 'HEAD' as HTTPMethod,
  pingServerUrl: DEFAULT_PING_SERVER_URL
}
