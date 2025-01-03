import { TextStyle } from '@components/types'
import { css, styled } from 'styled-components/native'

export const StyledText = styled.Text.withConfig({
  shouldForwardProp: prop => prop !== 'isDisabled'
})<TextStyle>`
  margin: 0;
  padding: 0;
  font-family: 'Libre-Franklin-Bold';
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
  ${({ style }) => style}
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.25;
    `}
`

export const TitleStyle = css`
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
  font-family: Caprasimo;
  font-size: 36px;
  line-height: 38px;
`

export const CenteredTitleStyle = css`
  ${TitleStyle}
  text-align: center;
`

export const SubTitleStyle = css<TextStyle>`
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
  font-size: 26px;
  font-family: Libre-Franklin-ExtraLight;
  line-height: 38px;
  font-weight: 500;
`

export const ParagraphStyle = css<TextStyle>`
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
  font-size: 18px;
  font-family: Libre-Franklin-ExtraLight;
  line-height: 28px;
`

export const CenteredParagraphStyle = css`
  ${ParagraphStyle}
  text-align: center;
`

export const LabelStyle = css`
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
  font-size: 20px;
  font-family: Libre-Franklin-SemiBold;
  line-height: 26px;
`

export const CardLabelStyle = css<TextStyle>`
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
  font-size: 14px;
  font-family: Libre-Franklin-SemiBold;
`

export const CardNumberStyle = css<TextStyle>`
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
  font-size: 38px;
  font-family: Libre-Franklin;
  font-weight: 700;
  line-height: 39px; /* 102.632% */
`

export const SmallCardNumberStyle = css<TextStyle>`
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
  font-size: 20px;
  font-family: Libre-Franklin-SemiBold;
  font-weight: 700;
  line-height: 21px;
`

export const CutoffStyle = css<TextStyle>`
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
  font-size: 14px;
  font-family: Libre-Franklin-Medium;
  font-style: normal;
`

export const HeaderTitleStyle = css<TextStyle>`
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
  font-size: 20px;
  font-family: Libre-Franklin-SemiBold;
  line-height: 26px;
  text-align: left;
`

export const DateStyle = css<TextStyle>`
  font-size: 13px;
  font-family: Libre-Franklin-Medium;
  line-height: 16px;
  text-align: right;
  ${({ theme }) => css`
    color: ${theme.lightGray};
  `}
`
export const FooterStyle = css<TextStyle>`
  font-size: 26px;
  font-family: Libre-Franklin-Medium;
  line-height: 32px;
  text-align: left;
  padding: 0px 0px 20px;
  margin-left: 10px;
  ${({ theme }) => css`
    color: ${theme.secondary};
  `}
`

export const AlertStyle = css`
  font-family: Libre-Franklin-Bold;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.white};
`

export default {
  Title: TitleStyle,
  CenteredTitle: CenteredTitleStyle,
  SubTitle: SubTitleStyle,
  Label: LabelStyle,
  Paragraph: ParagraphStyle,
  CenteredParagraph: CenteredParagraphStyle,
  CardLabel: CardLabelStyle,
  CardNumber: CardNumberStyle,
  SmallCardNumber: SmallCardNumberStyle,
  Cutoff: CutoffStyle,
  HeaderTitle: HeaderTitleStyle,
  Date: DateStyle,
  Footer: FooterStyle,
  Alert: AlertStyle
}
