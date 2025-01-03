import { Text } from '@components/Text'
import React from 'react'
import { Circle, Container, PassTextStyle, StyledPressable } from './styles'
import { RadioButtonComponent } from './types'
import { InputProps } from '@components/types'

export const RadioInput = ({ value, onChange }: InputProps<boolean>) => (
  <StyledPressable
    selected={value}
    onPress={() => {
      onChange(!value)
    }}
  >
    <Circle selected={value} />
  </StyledPressable>
)
export const Radio: RadioButtonComponent = ({
  raw,
  capitalize,
  text,
  children,
  namespace,
  value,
  onChange
}) => {
  return (
    <Container>
      <RadioInput value={value} onChange={onChange} />
      <Text
        namespace={namespace}
        text={text}
        capitalize={capitalize}
        raw={raw}
        textStyle={PassTextStyle}
      >
        {children}
      </Text>
    </Container>
  )
}
