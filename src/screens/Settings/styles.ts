import { TextStyle } from '@components/types'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  gap: 15px;
`
export const CalibrationContainer = styled.View`
  align-items: flex-start;
  gap: 5px;
`
export const CalibrationTextStyle = css<TextStyle>`
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
  line-height: 13px;
  font-size: 13px;
  font-family: Libre-Franklin-Medium;
`

export const WideCardRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 30px;
`
