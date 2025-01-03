import { View } from 'react-native'

import styled, { css } from 'styled-components/native'
import { ResultIconContainerProps } from './types'

export const CardContainer = styled.Pressable`
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  border-bottom-color: rgba(41, 45, 92, 0.1);
  padding: 5px 0px 25px 0px;
`

export const CaptionHeader = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px 10px 10px;
`

export const Captions = styled(View)`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  padding-left: 10px;
  padding-right: 10px;
`

export const ResultSide = styled.View<{ borderRightWidth: number }>(({ borderRightWidth }) => {
  return css`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
    border-color: rgba(237, 241, 244, 1);
    border-right-width: ${borderRightWidth}px;
    padding-top: 13px;
  `
})

export const ClockContainer = styled(View)`
  width: 10px;
  height: 10px;
`

export const TimeContainer = styled(View)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 5px;
  width: 170px;
`
export const ResultIconContainer = styled.View<ResultIconContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  padding: 5px;
`
