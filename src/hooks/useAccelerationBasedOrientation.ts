import { Subscription } from 'expo-modules-core'
import { DeviceMotion } from 'expo-sensors'
import { useEffect, useMemo, useRef, useState } from 'react'

export const ACCELERATION_THRESHOLD = -5
export const UPDATE_INTERVAL = 500

interface MotionEvent {
  accelerationIncludingGravity?: { x: number }
}

export const isEventLandscape = (event: MotionEvent) => {
  if (event.accelerationIncludingGravity === undefined) {
    return undefined
  }

  return event.accelerationIncludingGravity.x < ACCELERATION_THRESHOLD
}

export const useAccelerationBasedOrientation = () => {
  const subscription = useRef<Subscription | null>(null)

  const [isLandscape, setIsLandscape] = useState<boolean | undefined>(undefined)

  const _subscribe = () => {
    DeviceMotion.setUpdateInterval(UPDATE_INTERVAL)
    subscription.current = DeviceMotion.addListener(motionData => {
      const isLandscape = isEventLandscape(motionData)

      setIsLandscape(isLandscape)
    })
  }

  const _unsubscribe = () => {
    subscription.current?.remove()
    subscription.current = null
  }

  useEffect(() => {
    _subscribe()
    return () => _unsubscribe()
  }, [])

  const value = useMemo(() => {
    if (isLandscape === undefined) {
      return undefined
    } else {
      return { isLandscape }
    }
  }, [isLandscape])

  return value
}
