import { TextStyle } from '@components/types'
import styled, { css } from 'styled-components/native'

export const InnerContainer = styled.View<{ side: string }>(({ side }) => {
  return css`
    padding: 25px 25px 20px 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex: 1 0 0;
    background-color: rgb(246, 248, 250);
    border-radius: ${side === 'right' ? '25px 0px 0px 25px' : '0px 25px 25px 0px'};
  `
})

export const TitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`

export const TextRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

export const SideTextStyle = css<TextStyle>`
  font-size: 20px;
`
