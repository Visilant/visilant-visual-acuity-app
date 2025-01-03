import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import { ComponentType } from './types'

const OFFSET_TOP_PIXELS = -16

export const FadeInOutView: ComponentType = ({ visible, children, absolute, slide, ...props }) => {
  const opacity = useRef(new Animated.Value(0)).current
  const offsetTop = useRef(new Animated.Value(OFFSET_TOP_PIXELS)).current

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, { toValue: 1, duration: 300, useNativeDriver: true }).start()
      Animated.timing(offsetTop, { toValue: 0, duration: 300, useNativeDriver: true }).start()
    } else {
      Animated.timing(opacity, { toValue: 0, duration: 300, useNativeDriver: true }).start()
      Animated.timing(offsetTop, {
        toValue: OFFSET_TOP_PIXELS,
        duration: 300,
        useNativeDriver: true
      }).start()
    }
  }, [visible])

  return (
    <Animated.View
      style={{
        opacity,
        transform: slide ? [{ translateY: offsetTop }] : [],
        position: absolute ? 'absolute' : 'relative'
      }}
      {...props}
    >
      {children}
    </Animated.View>
  )
}
