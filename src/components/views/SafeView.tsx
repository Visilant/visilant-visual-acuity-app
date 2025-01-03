import React from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SafeViewStyle } from './styles'
import { ComponentType } from './types'

export const SafeView: ComponentType = ({ children, compact = false }) => {
  const insets = useSafeAreaInsets()
  return (
    <SafeViewStyle insets={insets} compact={compact}>
      {children}
    </SafeViewStyle>
  )
}
