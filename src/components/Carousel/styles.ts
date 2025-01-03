import PagerView from 'react-native-pager-view'
import styled, { css } from 'styled-components/native'
import { CarouselProps } from './types'
import { View } from 'react-native'

export const StyledPagerView = styled(PagerView).withConfig({
  shouldForwardProp: prop => prop !== 'height'
})<CarouselProps>`
  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          flex: 1;
        `}
`

export const PageIndicatorRow = styled(View)`
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`

export const PageIndicator = styled.Pressable<{ selected: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme, selected }) => (selected ? theme.accent : theme.raised)};
`
