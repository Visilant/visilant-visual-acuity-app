import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

export const useDimensions = () => {
  const [{ window, screen }, setDimensions] = useState({
    window: {
      width: 0,
      height: 0,
      scale: 0,
      fontScale: 0
    },
    screen: {
      width: 0,
      height: 0,
      scale: 0,
      fontScale: 0
    }
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setDimensions({ window, screen })
    })
    return () => subscription?.remove()
  })
  return { window, screen }
}
