import styled, { css } from 'styled-components/native'
import { InsetProps, SafeViewProps, ScreenProps } from './types'

export const Screen = styled.View<ScreenProps>`
  flex: 1;
  background-color: ${({ theme, noBg }) => (noBg ? theme.primary : theme.lightBackground)};
`

export const SafeViewStyle = styled.View<SafeViewProps>`
  flex: 1;
  ${({ insets, compact }) => css`
    padding-top: ${insets.top + (compact ? 0 : 60)}px;
    padding-left: ${insets.left + 30}px;
    padding-right: ${insets.right + 30}px;
  `}
`

export const BodyStyle = styled.ScrollView`
  flex: 1;
`

export const LoginScreen = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #fff;
  padding-left: 30px;
  padding-right: 30px;
  gap: 30px;
`

export const FeedbackScreen = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.lightBackground};
  padding-left: 30px;
  padding-right: 30px;
  gap: 30px;
`

export const Row = styled.View`
  align-items: center;
`

export const FooterStyle = styled.View<InsetProps>`
  padding-top: 20px;
  border-top: 1px solid rgba(41, 45, 92, 0.1);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  ${({ insets }) => css`
    padding-bottom: ${30}px;
    padding-left: ${insets.left + 30}px;
    padding-right: ${insets.right + 30}px;
  `}
`

export const Body = styled.View<ScreenProps>(p => {
  const paddingBottom = p.compact ? 30 : 100
  return css`
    gap: 35px;
    flex: 1;
    padding-bottom: ${paddingBottom}px;
  `
})
export const Header = styled.View`
  padding-bottom: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(41, 45, 92, 0.1);
`

export const Card = styled.View`
  padding: 25px 25px 30px 25px;
  border-radius: 25px;
  border: 1px solid #e6eef4;
  background: rgba(255, 255, 255, 0.5);
  gap: 30px;
`

export const LoginCard = styled.View`
  padding: 25px;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid #e6eef4;
  background: rgba(98, 157, 209, 0.1);
`

export const CardRow = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 15px;
`

export const CardTagRow = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  row-gap: 15px;
  column-gap: 5px;
`

export const FlexBox = styled.View`
  display: flex;
  flex-direction: row;
`

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
