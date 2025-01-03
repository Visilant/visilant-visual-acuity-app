import { FunctionComponent } from 'react'
import { RuleSet } from 'styled-components'

export enum SizeEnum {
  small,
  normal
}

export interface TextStyle<T extends object = object> {
  style?: RuleSet<T>
  props?: T
  isDisabled?: boolean
}

export interface TextProps<T extends object = object> {
  raw?: boolean
  capitalize?: boolean
  text?: string
  children?: string
  textStyle?: RuleSet<T>
  styleProps?: T
  namespace?: string
  isDisabled?: boolean
}

export interface UnstyledText {
  isRaw?: boolean
  capitalize?: boolean
  text?: string
}

export type TextComponentType<T extends object = object> = FunctionComponent<TextProps<T>>

export type VoidCallback<T> = (param: T) => void

export interface InputProps<T> {
  value: T
  onChange: VoidCallback<T>
}

export type InputComponentType<T> = FunctionComponent<InputProps<T>>
