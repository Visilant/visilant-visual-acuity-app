import { ScreenState } from './screen-state'
import { useCallback } from 'react'
import { useStackNavigation } from '@screens/stack'
import { useFocusEffect } from '@react-navigation/native'

export const useSetNavigationOrientation = (screenState: ScreenState) => {
  const navigation = useStackNavigation()

  useFocusEffect(
    useCallback(() => {
      if (screenState === ScreenState.instructions) {
        navigation.setOptions({ orientation: 'portrait' })
      } else if (screenState === ScreenState.testing) {
        navigation.setOptions({ orientation: 'landscape' })
      }
    }, [screenState])
  )
}
