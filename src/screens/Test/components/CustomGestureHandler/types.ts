import { HandlerStateChangeEvent } from 'react-native-gesture-handler'

export interface GestureHandlerProps {
  up: (event: HandlerStateChangeEvent) => void
  down: (event: HandlerStateChangeEvent) => void
  left: (event: HandlerStateChangeEvent) => void
  right: (event: HandlerStateChangeEvent) => void
}
