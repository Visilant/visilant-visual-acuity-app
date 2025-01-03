import { Text } from '@components/Text'
import { SizeEnum } from '@components/types'
import React, { useEffect, useRef, useState } from 'react'
import { IconContainer, PassTextStyle, Style } from './styles'
import { ButtonType, ButtonComponent } from './types'
import { Icon, IconsEnum } from '@components/Icon'

const LOADING_BLINK_INTERVAL = 500

export const Button: ButtonComponent = ({
  size,
  type = ButtonType.normal,
  onPress,
  raw,
  capitalize,
  text,
  children,
  namespace,
  icon,
  isDisabled,
  isLoading,
  ...props
}) => {
  const [iconPhase, setIconPhase] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const selectedSize = size ?? SizeEnum.normal

  useEffect(() => {
    const changePhase = () => setIconPhase(phase => !phase)
    const cleanup = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    if (isLoading) {
      intervalRef.current = setInterval(changePhase, LOADING_BLINK_INTERVAL)
    } else {
      cleanup()
    }

    return cleanup
  }, [isLoading])

  return (
    <Style
      onPress={isDisabled || isLoading ? () => {} : onPress}
      size={selectedSize}
      type={type}
      {...props}
    >
      {isLoading ? (
        <Icon
          icon={iconPhase ? IconsEnum.leftEyeLight : IconsEnum.rightEyeLight}
          width={94}
          height={24}
        />
      ) : (
        <>
          <IconContainer isDisabled={isDisabled}>{icon}</IconContainer>
          <Text
            raw={raw}
            capitalize={capitalize}
            textStyle={PassTextStyle}
            styleProps={{ size: selectedSize, type }}
            namespace={namespace}
            isDisabled={isDisabled}
          >
            {children ?? text ?? 'Button'}
          </Text>
        </>
      )}
    </Style>
  )
}
