import * as Brightness from 'expo-brightness'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'

export const useMaxBrightness = () => {
  useFocusEffect(
    useCallback(() => {
      Brightness.setBrightnessAsync(1)

      return () => {
        Brightness.restoreSystemBrightnessAsync()
      }
    }, [])
  )
}
