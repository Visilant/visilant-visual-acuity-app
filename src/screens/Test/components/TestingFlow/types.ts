import { Flow } from '@screens/Test/utils/useTestingFlow'
import { FunctionComponent } from 'react'

export interface TestFlowProps {
  flow: Flow
}

export type TestFlowComponent = FunctionComponent<TestFlowProps>
