import { FunctionComponent, PropsWithChildren } from 'react'

export interface Insets {
  top: number
  bottom: number
  left: number
  right: number
}

export interface InsetProps {
  insets: Insets
}

export interface ScreenProps {
  noBg?: boolean
  compact?: boolean
}

export interface BodyProps {
  fullHeight?: boolean
  smallGap?: boolean
}

export interface SafeViewProps extends InsetProps {
  compact?: boolean
}

export type BodyType = FunctionComponent<PropsWithChildren<BodyProps>>
export type ChildrenType = FunctionComponent<PropsWithChildren>
export type ComponentType = FunctionComponent<PropsWithChildren<ScreenProps>>
