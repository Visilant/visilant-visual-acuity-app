import React, { PropsWithChildren } from 'react'
import { Directions, FlingGestureHandler } from 'react-native-gesture-handler'
import { GestureHandlerProps } from './types'

export const CustomGestureHandler = ({
  children,
  up,
  down,
  left,
  right
}: PropsWithChildren<GestureHandlerProps>) => (
  <FlingGestureHandler direction={Directions.UP} onEnded={up}>
    <FlingGestureHandler direction={Directions.DOWN} onEnded={down}>
      <FlingGestureHandler direction={Directions.LEFT} onEnded={left}>
        <FlingGestureHandler direction={Directions.RIGHT} onEnded={right}>
          {children}
        </FlingGestureHandler>
      </FlingGestureHandler>
    </FlingGestureHandler>
  </FlingGestureHandler>
)
