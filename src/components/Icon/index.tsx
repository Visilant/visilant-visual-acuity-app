import Alert from '@assets/svg/alert.svg'
import FaCheck from '@assets/svg/check-solid.svg'
import Check from '@assets/svg/check.svg'
import Clock from '@assets/svg/clock.svg'
import Close from '@assets/svg/close.svg'
import Info from '@assets/svg/info.svg'
import Settings from '@assets/svg/settings.svg'
import LeftEye from '@assets/svg/left-eye-open.svg'
import RightEye from '@assets/svg/right-eye-open.svg'
import LeftEyeLight from '@assets/svg/left-eye-open-light.svg'
import RightEyeLight from '@assets/svg/right-eye-open-light.svg'
import LeftEyePinhole from '@assets/svg/left-pinhole.svg'
import RightEyePinhole from '@assets/svg/right-pinhole.svg'
import Eye from '@assets/svg/eye.svg'
import Home from '@assets/svg/home.svg'
import IconSettings from '@assets/svg/icon-settings.svg'
import PinholeRightLow from '@assets/svg/pinhole-right-low.svg'
import Correct from '@assets/svg/correct.svg'
import Failed from '@assets/svg/failed.svg'
import React from 'react'

import { Style } from './styles'
import { ComponentType, IconDictionary, IconsEnum } from './types'

export { IconsEnum } from './types'

export const Icons: IconDictionary = {
  [IconsEnum.check]: Check,
  [IconsEnum.faCheck]: FaCheck,
  [IconsEnum.clock]: Clock,
  [IconsEnum.close]: Close,
  [IconsEnum.info]: Info,
  [IconsEnum.settings]: Settings,
  [IconsEnum.leftEye]: LeftEye,
  [IconsEnum.rightEye]: RightEye,
  [IconsEnum.leftEyeLight]: LeftEyeLight,
  [IconsEnum.rightEyeLight]: RightEyeLight,
  [IconsEnum.leftEyePinhole]: LeftEyePinhole,
  [IconsEnum.rightEyePinhole]: RightEyePinhole,
  [IconsEnum.alert]: Alert,
  [IconsEnum.eye]: Eye,
  [IconsEnum.pinholeRightLow]: PinholeRightLow,
  [IconsEnum.iconSettings]: IconSettings,
  [IconsEnum.home]: Home,
  [IconsEnum.correct]: Correct,
  [IconsEnum.failed]: Failed
}

export const Icon: ComponentType = ({
  icon,
  color,
  action,
  width,
  height,
  marginRight,
  testId
}) => {
  const SelectedIcon = Icons[icon]

  return (
    <Style onPress={action} width={width} height={height} marginRight={marginRight} testID={testId}>
      <SelectedIcon fill={color ?? '#23255A'} />
    </Style>
  )
}
