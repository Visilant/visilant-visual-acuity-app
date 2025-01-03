import { EdgeInsets } from 'react-native-safe-area-context'

export interface WrapperProps {
  insets: EdgeInsets
}

export enum AlertType {
  error = 'error',
  success = 'success',
  warning = 'warning'
}

export interface BoxProps {
  type: AlertType
}
