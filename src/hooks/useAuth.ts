import { useAppDispatch, useAppSelector } from '@store'
import { clearCredentials, refreshThunk, selectRefreshToken, selectToken } from '@store/auth'
import { useEffect } from 'react'
import { useIsTokenValid } from './useIsTokenValid'

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const token = useAppSelector(selectToken)
  const refresh_token = useAppSelector(selectRefreshToken)

  const isTokenValid = useIsTokenValid(token)
  const isRefreshTokenValid = useIsTokenValid(refresh_token)
  const isUserLoggedIn = isTokenValid || isRefreshTokenValid

  useEffect(() => {
    if (!isTokenValid) {
      if (isRefreshTokenValid) {
        dispatch(refreshThunk())
      } else {
        dispatch(clearCredentials())
      }
    }
  }, [isTokenValid, isRefreshTokenValid])

  return { isUserLoggedIn }
}
