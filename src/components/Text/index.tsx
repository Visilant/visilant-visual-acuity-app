import { TextComponentType } from '@components/types'
import React from 'react'
import { StyledText } from './styles'
import { useTranslatedOrRaw } from '@hooks/useTranslatedOrRaw'
export { default as TextStyles } from './styles'

export const Text: TextComponentType = ({
  raw,
  capitalize,
  children,
  text,
  textStyle,
  namespace,
  styleProps,
  isDisabled
}) => {
  const value = children ?? text
  const content = useTranslatedOrRaw(value, namespace, raw)

  return (
    <StyledText style={textStyle} props={styleProps} isDisabled={isDisabled}>
      {capitalize ? content.toUpperCase() : content}
    </StyledText>
  )
}
