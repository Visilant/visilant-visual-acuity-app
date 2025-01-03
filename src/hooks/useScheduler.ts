import { useCallback, useEffect, useMemo, useRef } from 'react'

export const UPDATE_INTERVAL_MILLISEC = 5000

export const useScheduler = (callback: VoidFunction) => {
  const intervalId = useRef<NodeJS.Timeout>()

  const stop = useCallback(() => {
    clearInterval(intervalId.current)
    intervalId.current = undefined
  }, [])

  const start = useCallback(() => {
    stop()
    intervalId.current = setInterval(callback, UPDATE_INTERVAL_MILLISEC)
  }, [callback])

  useEffect(() => {
    return () => stop()
  }, [])

  return useMemo(() => ({ start, stop }), [start, stop])
}
