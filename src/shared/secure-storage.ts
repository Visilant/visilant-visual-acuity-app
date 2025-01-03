import * as ExpoSecureStore from 'expo-secure-store'

export class SecureStorage {
  static async setItem(key: string, value: string): Promise<void> {
    await ExpoSecureStore.setItemAsync(key, value)
  }

  static async getItem(key: string): Promise<string | null> {
    return await ExpoSecureStore.getItemAsync(key)
  }

  static async deleteItem(key: string): Promise<void> {
    return await ExpoSecureStore.deleteItemAsync(key)
  }
}
