import { FunctionComponent } from 'react'
import { ViewProps } from 'react-native'

export interface VisibilityProps {
  visible?: boolean
  absolute?: boolean
  slide?: boolean
}

export type ComponentType = FunctionComponent<ViewProps & VisibilityProps>
