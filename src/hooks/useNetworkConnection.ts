import { useAppSelector } from '@store'
import { selectNetworkState } from '@store/network'
import { useMemo } from 'react'

export const useNetworkConnection = () => {
  const { isConnected } = useAppSelector(selectNetworkState)

  return useMemo(
    () => ({
      isConnected
    }),
    [isConnected]
  )
}
