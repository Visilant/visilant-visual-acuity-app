import { InputProps } from '@components/types'
import { FunctionComponent } from 'react'

export enum InputType {
  input,
  password,
  dropdown,
  textArea
}
export interface PlaceholderText {
  isRaw?: boolean
  placeholder?: string
  namespace?: string
}
export interface Props {
  type?: InputType
  alter?: boolean
  error?: boolean
}
export type InputComponent = FunctionComponent<InputProps<string> & PlaceholderText & Props>
