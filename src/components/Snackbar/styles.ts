import { FadeInOutView } from '@components/FadeInOutView'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { AlertType, BoxProps, WrapperProps } from './types'
import { Text } from '@components/Text'

const typesToThemeColors = {
  [AlertType.error]: 'accent',
  [AlertType.success]: 'secondary',
  [AlertType.warning]: 'accent'
}

export const Wrapper = styled(View).withConfig({
  shouldForwardProp: prop => prop !== 'insets'
})<WrapperProps>`
  ${({ insets: { top, right, bottom, left } }) => `
    position: absolute;
    top: ${top}px;
    right: ${right}px;
    bottom: ${bottom}px;
    left: ${left}px;
    z-index: 10;
    padding: 30px;
    pointer-events: none;
    flex-direction: column;
    gap: 10px;
  `}
`
export const Box = styled(FadeInOutView).withConfig({
  shouldForwardProp: prop => prop !== 'type'
})<BoxProps>`
  ${({ theme, type }) => `
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
    padding: 25px;
    border-radius: 10px;
    background: ${theme[typesToThemeColors[type]] || theme.secondary};
  `}
`

export const LabelText = styled(Text)`
  flex-grow: 0;
`
