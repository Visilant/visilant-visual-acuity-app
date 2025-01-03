import { useEffect } from 'react'
import { useAppDispatch } from '@store'
import { syncExaminations } from '@store/examinations'
import { useAuth } from '@hooks/useAuth'
import { useScheduler } from '@hooks/useScheduler'
import { useNetworkConnection } from '@hooks/useNetworkConnection'

export const useSync = () => {
  const dispatch = useAppDispatch()

  const { isConnected } = useNetworkConnection()
  const { isUserLoggedIn } = useAuth()

  const scheduler = useScheduler(() => {
    dispatch(syncExaminations())
  })

  useEffect(() => {
    if (isUserLoggedIn && isConnected) {
      scheduler.start()
    } else {
      scheduler.stop()
    }
  }, [scheduler])
}
