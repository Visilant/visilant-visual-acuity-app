import { AuthApi, LoginRequest } from '@api/auth-api'
import { AppDispatch, RootState } from '@store'
import { LoginResult } from '../types'
import { setCredentials } from '../authSlice'

export class LoginHandler {
  constructor(
    private state: RootState,
    private dispatch: AppDispatch,
    private credentials: LoginRequest
  ) {}

  async process(): Promise<LoginResult> {
    try {
      await this.sendRequest()
    } catch {
      return LoginResult.Failed
    }
    return LoginResult.Success
  }

  async sendRequest() {
    const { data } = await AuthApi.login(this.credentials)
    const { token, refresh_token } = data
    await this.dispatch(setCredentials({ token, refresh_token }))
  }
}
