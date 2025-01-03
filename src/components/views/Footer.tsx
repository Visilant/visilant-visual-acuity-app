import React, { useEffect, useState } from 'react'

import { Keyboard } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FooterStyle } from './styles'
import { ChildrenType } from './types'

export const Footer: ChildrenType = ({ children }) => {
  const insets = useSafeAreaInsets()
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => {
      setHide(true)
    })
    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
      setHide(false)
    })
    return () => {
      showListener.remove()
      hideListener.remove()
    }
  }, [])

  return !hide && <FooterStyle insets={insets}>{children}</FooterStyle>
}
