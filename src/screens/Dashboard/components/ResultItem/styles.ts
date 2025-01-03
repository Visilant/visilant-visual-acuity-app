import styled, { css } from 'styled-components/native'
import { BoxItemProps } from './types'

export const BoxItem = styled.View<BoxItemProps>(({ hasBorder }) => {
  return css`
    width: 55%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    border-color: rgba(41, 45, 92, 0.1);
    border-right-width: ${hasBorder ? '1px' : '0px'};
    padding: 5px;
  `
})
