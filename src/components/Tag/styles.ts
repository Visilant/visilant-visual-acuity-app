import { css, styled } from 'styled-components/native'

export const Container = styled.Pressable<{ selected: boolean }>(p => {
  const { selected, theme } = p

  const background = selected ? theme.secondary : theme.white

  return css`
    background: ${background};
    border-radius: 25px;
    overflow: hidden;
    align-self: flex-start;
    padding: 10px 15px;
  `
})

export const Label = styled.Text<{ selected: boolean }>(p => {
  const color = p.selected ? p.theme.primary : p.theme.secondary

  return css`
    color: ${color};
    font-family: Libre-Franklin-Bold;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
  `
})
