import { AppConfig } from '@config'
import { LoginRequest, RefreshRequest, UserDto } from './types'

import { HttpClient } from '@api/http-client'
import { ApiResponse } from '@api/types'

export * from './types'

const config = AppConfig.getConfig()
const httpClient = new HttpClient(config.authApiBaseUrl, [])

export class AuthApi {
  static async login(body: LoginRequest): Promise<ApiResponse<UserDto>> {
    return await httpClient.post<LoginRequest, ApiResponse<UserDto>>('/signin', body)
  }

  static async refresh(body: RefreshRequest): Promise<ApiResponse<UserDto>> {
    return await httpClient.post<RefreshRequest, ApiResponse<UserDto>>('/signin/refreshtoken', body)
  }
}
