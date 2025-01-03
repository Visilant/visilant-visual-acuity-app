import { TextStyle } from '@components/types'
import { css, styled } from 'styled-components/native'

export const WrapperStyle = styled.View`
  margin-right: 16px;
  margin-bottom: 16px;

  //Figma exported layout
  align-items: flex-start;
  gap: 10px;
  align-self: flex-start;
`

export const InnerWrapperStyle = styled.View`
  flex-direction: row;
  align-items: center;
  align-content: center;
  gap: 7px;
  align-self: flex-start;
`

export const PassLowerTextStyle = css<TextStyle>`
  color: ${props => props.theme.secondary};
  font-size: 13px;
  font-family: Libre-Franklin-Medium;
  line-height: 13px;
`

export const PassUpperTextStyle = css<TextStyle>`
  color: ${props => props.theme.secondary};
  font-size: 18px;
  font-family: Libre-Franklin-Bold;
  line-height: 38px;
`
