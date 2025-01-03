import { AppDispatch, RootState } from '@store'
import { AuthApi } from '@api/auth-api'
import { setCredentials } from '../authSlice'

export class RefreshTokenHandler {
  constructor(
    private state: RootState,
    private dispatch: AppDispatch
  ) {}

  async process() {
    await this.sendRequest()
  }

  async sendRequest() {
    if (this.refreshToken === null) {
      throw new Error('No refresh token')
    }
    const credentials = { refresh_token: this.refreshToken }
    const { data } = await AuthApi.refresh(credentials)
    const { token, refresh_token } = data

    this.dispatch(setCredentials({ token, refresh_token }))
  }

  get refreshToken() {
    return this.state.auth.refresh_token
  }
}
