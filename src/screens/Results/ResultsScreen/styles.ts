import { LabelStyle } from '@components/Text/styles'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  align-items: flex-start;
  padding: 25px 25px 30px 25px;
  gap: 20px;
  border-radius: 25px;
  border: 1px solid #e6eef4;
  background: rgba(255, 255, 255, 0.5);
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-wrap: wrap;
  gap: 20px;
`

export const LabelTextStyle = css`
  ${LabelStyle}
  min-width: 65px;
`

export const Wrapper = styled.View`
  gap: 15px;
`
