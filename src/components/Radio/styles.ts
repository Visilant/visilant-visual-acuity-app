import { TextStyle } from '@components/types'
import { css, styled } from 'styled-components/native'
import { StyleProps } from './types'

export const StyledPressable = styled.Pressable<StyleProps>(p => {
  const { theme, selected } = p

  const backgroundColor = selected ? theme.secondary : theme.white

  return css`
    background-color: ${backgroundColor};
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    overflow: hidden;
  `
})

export const Circle = styled.View<StyleProps>(p => {
  const { theme, selected } = p
  const backgroundColor = selected ? theme.primary : theme.white

  return css`
    width: 10px;
    height: 10px;
    border-radius: 10px;
    flex-shrink: 0;
    background-color: ${backgroundColor};
  `
})

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
