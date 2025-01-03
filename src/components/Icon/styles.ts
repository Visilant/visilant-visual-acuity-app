import { styled } from 'styled-components/native'

export const Style = styled.Pressable<{ width?: number; height?: number; marginRight?: number }>`
  width: ${props => props.width ?? 25}px;
  height: ${props => props.height ?? 25}px;
  margin-right: ${props => props.marginRight ?? 0}px;
`
