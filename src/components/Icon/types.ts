import { FunctionComponent } from 'react'
import { SvgProps } from 'react-native-svg'

export enum IconsEnum {
  check = 'check',
  faCheck = 'faCheck',
  clock = 'clock',
  close = 'close',
  info = 'info',
  settings = 'settings',
  eye = 'eye',
  pinholeRightLow = 'pinholeRightLow',
  iconSettings = 'iconSettings',
  alert = 'alert',
  home = 'home',
  leftEye = 'leftEye',
  rightEye = 'rightEye',
  leftEyeLight = 'leftEyeLight',
  rightEyeLight = 'rightEyeLight',
  leftEyePinhole = 'leftEyePinhole',
  rightEyePinhole = 'rightEyePinhole',
  correct = 'correct',
  failed = 'failed'
}

export type IconDictionary = {
  [key in IconsEnum]: React.FC<SvgProps>
}

export interface IconProps {
  icon: IconsEnum
  color?: string
  width?: number
  height?: number
  marginRight?: number
  action?: () => void
  testId?: string
}

export type ComponentType = FunctionComponent<IconProps>
