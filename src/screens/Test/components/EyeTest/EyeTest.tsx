import { EyeResult } from '@shared/domain/eyes-result'
import { useState } from 'react'
import { SnellenChartRatio } from '@shared/domain/snellen-chart'
import { ManualTestResult } from '@shared/domain/manual-test-result'
import { SnellenTest } from '@screens/Test/components/SnellenTest'
import { ManualTestScreen } from '@screens/Test/components/ManualTestScreen'
import { EyeTestingState } from '@screens/Test/components/EyeTest/types'

export const EyeTest = ({ onFinish }: { onFinish: (result: EyeResult) => void }) => {
  const [testState, setTestState] = useState(EyeTestingState.SnellenTest)
  const handleSnellenTestFinish = (result: SnellenChartRatio | undefined) => {
    if (result === undefined) {
      setTestState(EyeTestingState.FingerCounting)
    } else {
      onFinish(result)
    }
  }

  const handleFingerCounting = (result: boolean) => {
    if (result) {
      onFinish(ManualTestResult.FingerCounting)
    } else {
      setTestState(EyeTestingState.HandMovement)
    }
  }

  const handleHandMovement = (result: boolean) => {
    if (result) {
      onFinish(ManualTestResult.HandMovements)
    } else {
      setTestState(EyeTestingState.LightPerception)
    }
  }

  const lightPerception = (result: boolean) => {
    if (result) {
      onFinish(ManualTestResult.LightPerception)
    } else {
      onFinish(ManualTestResult.NoPerception)
    }
  }

  const content = {
    [EyeTestingState.SnellenTest]: <SnellenTest onFinish={handleSnellenTestFinish} />,
    [EyeTestingState.FingerCounting]: (
      <ManualTestScreen title="Finger counting" onPress={handleFingerCounting} />
    ),
    [EyeTestingState.HandMovement]: (
      <ManualTestScreen title="Hand movements" onPress={handleHandMovement} />
    ),
    [EyeTestingState.LightPerception]: (
      <ManualTestScreen title="Light perception" onPress={lightPerception} />
    )
  }

  return <>{content[testState]}</>
}
