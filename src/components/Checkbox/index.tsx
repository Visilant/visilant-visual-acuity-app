import { Icon, IconsEnum } from '@components/Icon'
import { Text } from '@components/Text'
import React from 'react'
import { Container, PassTextStyle, Style } from './styles'
import { ComponentType, InnerComponentType, TypeEnum } from './types'

export const CheckboxInput: InnerComponentType = ({ value, onChange }) => {
  const press = () => onChange(!value)
  const type = value ? TypeEnum.selected : TypeEnum.default
  return (
    <Style type={type} onPress={press}>
      <Icon icon={IconsEnum.faCheck} color="#ffffff" />
    </Style>
  )
}

export const Checkbox: ComponentType = ({
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
      <CheckboxInput value={value} onChange={onChange} />
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
