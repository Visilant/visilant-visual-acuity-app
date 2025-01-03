import { SizeEnum, TextProps } from '@components/types'
import { FunctionComponent, ReactNode } from 'react'

export enum ButtonType {
  'normal' = 'normal',
  'outlined' = 'outlined',
  'soft' = 'soft'
}
export interface Props {
  size?: SizeEnum
  type?: ButtonType
  icon?: ReactNode
  onPress: () => void
  isDisabled?: boolean
  isLoading?: boolean
}

export interface StyleProps {
  size: SizeEnum
  type: ButtonType
}

export type ButtonComponent = FunctionComponent<Props & TextProps>
