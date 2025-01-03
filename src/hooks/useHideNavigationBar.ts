import { setStatusBarHidden } from 'expo-status-bar'
import * as NavigationBar from 'expo-navigation-bar'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'

export const useHideNavigationBar = () => {
  useFocusEffect(
    useCallback(() => {
      setStatusBarHidden(true, 'slide')
      NavigationBar.setVisibilityAsync('hidden')
      NavigationBar.setBehaviorAsync('overlay-swipe')

      return () => {
        setStatusBarHidden(false, 'slide')
        NavigationBar.setVisibilityAsync('visible')
        NavigationBar.setBehaviorAsync('inset-touch')
      }
    }, [])
  )
}
