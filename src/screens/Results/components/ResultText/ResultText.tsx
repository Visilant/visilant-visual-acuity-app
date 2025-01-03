import { Text } from '@components'
import { useResultDisplay } from '@hooks/useResultDisplay'
import { LargeTextStyle } from '@screens/Results/styles'
import { SnellenChartRatio } from '@shared/domain/snellen-chart'
import React from 'react'

export const ResultText = ({ result }: { result: SnellenChartRatio }) => {
  const { createResultText } = useResultDisplay()

  const resultText = createResultText(result)

  return (
    <>
      <Text textStyle={LargeTextStyle} raw={true}>
        {resultText}
      </Text>
    </>
  )
}
