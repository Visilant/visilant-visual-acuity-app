import { TestNavigation } from '@screens/Test/components/TestNavigation/TestNavigation'
import { EyeTest } from '@screens/Test/components/EyeTest'
import { TestFlowComponent } from './types'

export const TestingFlow: TestFlowComponent = ({ flow }) => {
  if (flow.activeType === undefined) {
    return (
      <TestNavigation
        onFinishPress={flow.handleFinish}
        onSelectTest={flow.start}
        result={flow.results}
      />
    )
  } else {
    return <EyeTest onFinish={flow.handleResult} />
  }
}
