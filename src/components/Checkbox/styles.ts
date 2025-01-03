import { TextStyle } from '@components/types'
import { css, styled } from 'styled-components/native'
import { StyleProps, TypeEnum } from './types'

export const Style = styled.Pressable<StyleProps>`
  background: ${({ theme, type }) => (type === TypeEnum.selected ? theme.secondary : theme.white)};

  //width: 20px;
  //height: 20px;
  padding: 6px;
  border-radius: 12px;
  overflow: hidden;
`

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`

export const PassTextStyle = css<TextStyle>`
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
  font-family: Libre-Franklin-SemiBold;
  line-height: 26px;
  font-size: 20px;
`
