import { TextStyle } from '@components/types'
import { styled } from 'styled-components/native'

export const Style = styled.Text<TextStyle>`
  margin: 0;
  padding: 0;
  font-family: 'Libre-Franklin';
  ${({ style }) => style}
`
