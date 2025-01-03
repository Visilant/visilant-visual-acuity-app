import jwtDecode from 'jwt-decode'

export interface JwtInfo {
  id: string
  email: string
  username: string
}

export class UserInfo {
  constructor(private info?: JwtInfo) {}

  static fromToken(token: string | null): UserInfo {
    const info = token ? this.decodeToken(token) : undefined

    return new UserInfo(info)
  }

  static decodeToken(token: string): JwtInfo {
    try {
      return jwtDecode<JwtInfo>(token, { header: false })
    } catch (error) {
      console.error('Error decoding token:', error)
      throw error
    }
  }

  get id(): string {
    return this.info ? this.info.id : ''
  }

  get email(): string {
    return this.info ? this.info.email : ''
  }

  get userName(): string {
    return this.info ? this.info.username : ''
  }
}
