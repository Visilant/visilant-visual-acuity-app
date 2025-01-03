import { useCallback, useState } from 'react'
import { ScreenState } from '../utils/screen-state'
import { useHaptics } from '@hooks/useHaptics'
import { useAccelerationBasedOrientation } from '@hooks/useAccelerationBasedOrientation'
import { useFocusEffect } from '@react-navigation/native'

export const useMainTestScreenRotation = () => {
  const accelerationBasedOrientation = useAccelerationBasedOrientation()
  const [screenState, setScreenState] = useState(ScreenState.instructions)
  const haptics = useHaptics()

  useFocusEffect(
    useCallback(() => {
      if (accelerationBasedOrientation) {
        if (accelerationBasedOrientation.isLandscape) {
          setScreenState(ScreenState.testing)
          haptics.success()
        } else {
          setScreenState(ScreenState.instructions)
          haptics.warning()
        }
      }
    }, [accelerationBasedOrientation])
  )

  return { screenState }
}
