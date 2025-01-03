import { SizeEnum, TextStyle } from '@components/types'
import { css, styled } from 'styled-components/native'
import { ButtonType, StyleProps } from './types'
import { View } from 'react-native'

export const Style = styled.Pressable<StyleProps>(({ theme, size, type }) => {
  let sizeStyles
  let typeStyles

  if (size === SizeEnum.small) {
    sizeStyles = `
      background-color: ${theme.secondary};
      border-radius: 18px;
      padding: 10px 15px;
    `
  } else {
    sizeStyles = `
      height: 62px;
      justify-content: center;
      align-items: center;
      background-color: ${theme.accent};
      border-radius: 31px;
      padding: 12px 30px;
    `
  }

  if (type === ButtonType.outlined) {
    typeStyles = `
      background: transparent;
      border: 1px solid ${theme.secondary};
    `
  } else if (type === ButtonType.soft) {
    typeStyles = `
      background: ${theme.primary};
    `
  }

  return css`
    overflow: hidden;
    flex-wrap: nowrap;
    align-self: stretch;

    ${sizeStyles}
    ${typeStyles}
  `
})

export const PassTextStyle = css<TextStyle<StyleProps>>`
  position: relative;
  top: ${({ props }) => (props?.type === ButtonType.outlined ? css`-3px` : css`-1px`)};
  color: ${({ props, theme }) =>
    props?.type === ButtonType.outlined || props?.type === ButtonType.soft
      ? theme.secondary
      : theme.white};
  font-family: Libre-Franklin-Bold;

  ${({ props }) =>
    props?.size === SizeEnum.normal
      ? css`
          font-size: 24px;
          line-height: 38px;
        `
      : css`
          font-size: 16px;
          line-height: 16px;
        `};
  text-align: center;
  flex-wrap: nowrap;
`

export const IconContainer = styled(View)<{ isDisabled?: boolean }>`
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.25;
    `}
`
