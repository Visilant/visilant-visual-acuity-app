import { css, styled } from 'styled-components/native'
import { Props } from './types'

export const WrapperStyle = styled.View<Props>(p => {
  const backgroundColor = p.alter ? p.theme.white : p.theme.primary
  const borderColor = p.error ? p.theme.accent : p.theme.primary

  return css`
    overflow: hidden;
    border-radius: 10px;
    padding: 15px;

    /* Figma exported layout */
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    flex: 1;
    min-width: 150px;
    background-color: ${backgroundColor};
    border-color: ${borderColor};
    border-width: 1px;
  `
})
export const StyledInput = styled.TextInput(p => {
  const textColor = p.theme.secondary

  return css`
    flex: 1;
    color: ${textColor};
    font-size: 20px;
    line-height: 26px;
    font-family: 'Libre-Franklin-Bold';
  `
})
