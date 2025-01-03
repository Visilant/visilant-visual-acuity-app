import EyeClosed from '@assets/svg/eye-closed.svg'
import Eye from '@assets/svg/eye.svg'
import Swipe from '@assets/svg/swipe.svg'
import { Text } from '@components/Text'
import { useCustomTheme } from '@hooks/useCustomTheme'
import React from 'react'
import { InnerWrapperStyle, PassLowerTextStyle, PassUpperTextStyle, WrapperStyle } from './styles'
import { TestInstructionComponent } from './types'
import { ExaminationType } from '@shared/domain/examination-type'
import { Icon, IconsEnum } from '@components'

const RightTest = ({ theme }) => {
  return (
    <>
      <Eye fill={theme.secondary} />
      <EyeClosed fill={theme.secondary} />
      <Text namespace="test" text="normal.right" textStyle={PassUpperTextStyle} />
    </>
  )
}

const LeftTest = ({ theme }) => {
  return (
    <>
      <EyeClosed fill={theme.secondary} />
      <Eye fill={theme.secondary} />
      <Text namespace="test" text="normal.left" textStyle={PassUpperTextStyle} />
    </>
  )
}

const RightPinholeTest = () => {
  return (
    <>
      <Icon icon={IconsEnum.rightEyePinhole} />
      <Text namespace="test" text="pinhole.right" textStyle={PassUpperTextStyle} />
    </>
  )
}

const LeftPinholeTest = () => {
  return (
    <>
      <Icon icon={IconsEnum.leftEyePinhole} />
      <Text namespace="test" text="pinhole.left" textStyle={PassUpperTextStyle} />
    </>
  )
}

export const TestInstruction: TestInstructionComponent = ({ type }) => {
  const theme = useCustomTheme()

  const content = {
    [ExaminationType.NormalRight]: <RightTest theme={theme} />,
    [ExaminationType.NormalLeft]: <LeftTest theme={theme} />,
    [ExaminationType.PinholeRight]: <RightPinholeTest />,
    [ExaminationType.PinholeLeft]: <LeftPinholeTest />
  }

  return (
    <WrapperStyle>
      <InnerWrapperStyle>{content[type]}</InnerWrapperStyle>
      <InnerWrapperStyle>
        <Swipe fill={theme.secondary} />
        <Text namespace="test" text="swipe" textStyle={PassLowerTextStyle} />
      </InnerWrapperStyle>
    </WrapperStyle>
  )
}
