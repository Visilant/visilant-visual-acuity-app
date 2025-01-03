import { InputProps, TextProps } from '@components/types'
import { FunctionComponent } from 'react'

export enum TypeEnum {
  default,
  selected
}
export interface StyleProps {
  type: TypeEnum
}

export type ComponentType = FunctionComponent<TextProps & InputProps<boolean>>
export type InnerComponentType = FunctionComponent<InputProps<boolean>>
