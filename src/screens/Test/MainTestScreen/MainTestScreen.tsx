import React from 'react'
import { ScreenState } from '../utils/screen-state'
import { OrientationInstructions } from '@screens/Test/components/OrientationIstructions/OrientationInstructions'
import { useMaxBrightness } from '@hooks/useMaxBrightness'
import { useHideNavigationBar } from '@hooks/useHideNavigationBar'
import { useMainTestScreenRotation } from '../utils/useMainTestScreenRotation'
import { useSetNavigationOrientation } from '../utils/useSetNavigationOrientation'
import { withErrorBoundary } from '@hocs/withErrorBoundary'
import { TestingFlow } from '@screens/Test/components/TestingFlow'
import { useStackNavigation } from '@screens/stack'
import { useTestingFlow } from '../utils/useTestingFlow'
import { useDeepLinkParams } from '../utils/useDeepLinkParams'

const MainTestScreen = () => {
  useMaxBrightness()
  useHideNavigationBar()
  useDeepLinkParams()

  const { navigate } = useStackNavigation()

  const flow = useTestingFlow({
    onFinish: () => {
      navigate('Results')
    }
  })

  const { screenState } = useMainTestScreenRotation()
  useSetNavigationOrientation(screenState)

  if (screenState === ScreenState.instructions) return <OrientationInstructions />

  return <TestingFlow flow={flow} />
}

export default withErrorBoundary(MainTestScreen)
