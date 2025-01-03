import uuid from 'react-native-uuid'

export class UUID {
  static v4(): string {
    return uuid.v4() as string
  }
}
