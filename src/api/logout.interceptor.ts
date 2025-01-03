import { isTokenValid } from '@shared/isTokenValid'
import { store } from '@store'
import { clearCredentials, refreshThunk } from '@store/auth'
import { Interceptor } from './types'

export const logoutInterceptor: Interceptor = async () => {
  const { token, refresh_token } = store.getState().auth
  const isValid = isTokenValid(token)
  const isRefreshValid = isTokenValid(refresh_token)
  if (!isValid) {
    if (isRefreshValid) {
      await store.dispatch(refreshThunk()).unwrap()
    } else {
      store.dispatch(clearCredentials())
      throw new Error('Interceptor: Token invalid')
    }
  }
}
