import { FlexBox, Icon, IconsEnum, Text, TextStyles } from '@components'

import {
  CaptionHeader,
  Captions,
  CardContainer,
  ClockContainer,
  ResultIconContainer,
  ResultSide,
  TimeContainer
} from './styles'
import ResultItem from '../ResultItem/ResultItem'
import { ResultCardProps } from './types'
import { useResultCard } from '@screens/Dashboard/utils/useResultCard'
import { useTheme } from 'styled-components/native'

const ResultCard = (props: ResultCardProps) => {
  const cardData = useResultCard(props.examination)
  const theme = useTheme()
  const { patientName, date, right, left, rightPinhole, leftPinhole } = cardData

  return (
    <CardContainer onPress={props.onPress}>
      <CaptionHeader>
        <Text raw text={patientName} textStyle={TextStyles.HeaderTitle} />
        <TimeContainer>
          <Text raw text={date} textStyle={TextStyles.Date} />
          <ClockContainer>
            <Icon icon={IconsEnum.clock} />
          </ClockContainer>
        </TimeContainer>
      </CaptionHeader>

      <Captions>
        <ResultSide borderRightWidth={2}>
          <ResultIconContainer>
            <Icon icon={IconsEnum.eye} color={theme.inactive} />
            <Icon icon={IconsEnum.eye} color={theme.inactive} />
          </ResultIconContainer>
          <FlexBox>
            <ResultItem sideTitle="rightTitle" result={right} hasBorder />
            <ResultItem sideTitle="leftTitle" result={left} />
          </FlexBox>
        </ResultSide>
        <ResultSide borderRightWidth={0}>
          <ResultIconContainer>
            <Icon icon={IconsEnum.pinholeRightLow} />
          </ResultIconContainer>
          <FlexBox>
            <ResultItem sideTitle="rightTitle" result={rightPinhole} hasBorder />
            <ResultItem sideTitle="leftTitle" result={leftPinhole} />
          </FlexBox>
        </ResultSide>
      </Captions>
    </CardContainer>
  )
}
export default ResultCard
