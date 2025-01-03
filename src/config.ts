import { Platform } from 'react-native'

const envBaseUrl = process.env.EXPO_PUBLIC_API_BASE_URL ?? ''
const envAuthBaseUrl = process.env.EXPO_PUBLIC_AUTH_API_BASE_URL ?? ''
const deepLinkBaseUrl = process.env.EXPO_PUBLIC_DEEP_LINK_BASE_URL ?? ''

const tokenCheckInterval = parseInt(process.env.EXPO_PUBLIC_TOKEN_CHECK_INTERVAL ?? '60000')

const USE_LOCALHOST = 'USE_LOCALHOST'

export class AppConfig {
  private static getLocalhost() {
    return Platform.select({
      android: 'http://10.0.2.2',
      default: 'http://localhost'
    })
  }

  private static replaceLocalhost(base: string): string {
    const localHost = AppConfig.getLocalhost()
    return base.replace(USE_LOCALHOST, localHost)
  }

  public static getConfig() {
    return {
      apiBaseUrl: AppConfig.replaceLocalhost(envBaseUrl),
      authApiBaseUrl: AppConfig.replaceLocalhost(envAuthBaseUrl),
      deepLinkBaseUrl,
      tokenCheckInterval
    }
  }
}
