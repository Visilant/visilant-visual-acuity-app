import RotateIcon from '@assets/svg/rotate.svg'
import { Text } from '@components'
import React, { FunctionComponent } from 'react'
import { InnerContainer, SideTextStyle, TextRow, TitleRow } from './styles'
import { ResultCardSideProps } from './types'
import { ResultText } from '../ResultText'
import { LargeTextStyle } from '@screens/Results/styles'
import { isSnellenChartRatio } from '@shared/domain/snellen-chart'
import { useStackNavigation } from '@screens/stack'

export const ResultCardSide: FunctionComponent<ResultCardSideProps> = ({
  result,
  text,
  type,
  side
}) => {
  const { navigate } = useStackNavigation()

  const handleRedo = () => {
    navigate('Test', { activeTest: type })
  }

  return (
    <InnerContainer side={side}>
      <TitleRow>
        <Text textStyle={SideTextStyle} capitalize={true}>
          {text}
        </Text>
        <RotateIcon onPress={handleRedo} />
      </TitleRow>
      <TextRow>
        {!result ? (
          <Text textStyle={LargeTextStyle} raw={true}>
            Ø
          </Text>
        ) : isSnellenChartRatio(result) ? (
          <ResultText result={result} />
        ) : (
          <Text textStyle={LargeTextStyle} raw={true}>
            {result}
          </Text>
        )}
      </TextRow>
    </InnerContainer>
  )
}
