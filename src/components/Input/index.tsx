import Dropdown from '@assets/svg/dropdown.svg'
import PasswordVisible from '@assets/svg/password-visible.svg'
import Password from '@assets/svg/password.svg'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { useTheme } from 'styled-components/native'
import { StyledInput, WrapperStyle } from './styles'
import { InputComponent, InputType } from './types'
import { useTranslatedOrRaw } from '@hooks/useTranslatedOrRaw'
export { InputType } from './types'

export const Input: InputComponent = ({
  value,
  onChange,
  type,
  alter,
  placeholder,
  isRaw,
  namespace,
  error
}) => {
  const [secret, setSecret] = useState<boolean>(true)
  const placeholderText = useTranslatedOrRaw(placeholder, namespace, isRaw)

  const color = useTheme()
  const selectedType = type ?? InputType.input
  return (
    <WrapperStyle alter={alter} error={error}>
      <StyledInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholderText}
        placeholderTextColor={`${color['secondary']}19`}
        textAlign="left"
        textAlignVertical={type === InputType.textArea ? 'top' : 'center'}
        secureTextEntry={selectedType === InputType.password && secret}
        multiline={type === InputType.textArea}
        numberOfLines={type === InputType.textArea ? 4 : 1}
        autoCapitalize="none"
      />
      {selectedType === InputType.password && (
        <Pressable onPress={() => setSecret(state => !state)}>
          {secret ? <Password /> : <PasswordVisible />}
        </Pressable>
      )}
      {selectedType === InputType.dropdown && <Dropdown fill={'#23255A'} />}
    </WrapperStyle>
  )
}
