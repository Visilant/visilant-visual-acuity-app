import { Text } from '@components'
import React, { FunctionComponent } from 'react'
import { ResultCardProps } from './types'
import { Wrapper, Container } from './styles'
import { ResultCardSide } from '../ResultCardSide'
import { TestType } from '@screens/Results/utils/test-type'
import { ExaminationType } from '@shared/domain/examination-type'
import { TitleTextStyle } from '@screens/Results/styles'

export const ResultCard: FunctionComponent<ResultCardProps> = ({ result, testType }) => {
  const type = {
    [TestType.Visual]: { left: ExaminationType.NormalLeft, right: ExaminationType.NormalRight },
    [TestType.Pinhole]: { left: ExaminationType.PinholeLeft, right: ExaminationType.PinholeRight }
  }

  return (
    <Wrapper>
      <Text textStyle={TitleTextStyle}>{testType}</Text>
      <Container>
        <ResultCardSide
          result={result?.right}
          text="results.right"
          type={type[testType].right}
          side="right"
        />
        <ResultCardSide
          result={result?.left}
          text="results.left"
          type={type[testType].left}
          side="left"
        />
      </Container>
    </Wrapper>
  )
}
