import { useEffect } from 'react'
import { useAuth } from './useAuth'
import { backgroundFetchTask } from '@shared/background-fetch'

export const useBackgroundSync = () => {
  const { isUserLoggedIn } = useAuth()
  useEffect(() => {
    if (isUserLoggedIn) {
      backgroundFetchTask.register()
    } else {
      backgroundFetchTask.unregister()
    }
  }, [isUserLoggedIn])
}
