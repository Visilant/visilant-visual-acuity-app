import { useSnellenChartTest } from '@screens/Test/utils/useSnellenChartTest'
import { CustomGestureHandler } from '@screens/Test/components/CustomGestureHandler'
import Animated from 'react-native-reanimated'
import { AnimatedView } from './styles'
import { TestLetter } from '@components'
import React, { useEffect } from 'react'
import { MainContainer, TestScreen } from '@screens/Test/styles'
import { useSettings } from '@hooks/useSettings'
import { SnellenTestComponent } from '@screens/Test/components/SnellenTest/types'
import { TestLetterRender } from '@shared/test-letter-render'

export const SnellenTest: SnellenTestComponent = ({ onFinish }) => {
  const {
    cutoff: { decimal },
    actions,
    direction,
    isFinished,
    answer
  } = useSnellenChartTest()

  const {
    settings: { measurementDistance }
  } = useSettings()

  const size = TestLetterRender.calculateLetterSize(decimal, measurementDistance)
  const rotation = TestLetterRender.calculateRotation(direction)

  useEffect(() => {
    if (isFinished) {
      onFinish(answer?.ratio)
    }
  }, [isFinished])

  return (
    <TestScreen>
      <MainContainer>
        <CustomGestureHandler {...actions}>
          <Animated.View style={AnimatedView.view}>
            <TestLetter size={size} rotation={rotation} />
          </Animated.View>
        </CustomGestureHandler>
      </MainContainer>
    </TestScreen>
  )
}
