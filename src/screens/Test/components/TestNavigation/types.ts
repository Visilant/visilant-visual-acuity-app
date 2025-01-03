import { FunctionComponent } from 'react'
import { VoidCallback } from '@components/types'
import { IconsEnum } from '@components'
import { ExaminationType } from '@shared/domain/examination-type'
import { ExaminationResults } from '@shared/domain/examination-results'

interface TestNavigationProps {
  onFinishPress: VoidFunction

  onSelectTest: VoidCallback<ExaminationType>

  result: ExaminationResults
}

export type TestNavigationComponent = FunctionComponent<TestNavigationProps>

export interface TestNavigationButtonProps {
  onPress: VoidFunction
  text: string
  disabled: boolean
  icon: IconsEnum
}

export type TestNavigationButtonComponent = FunctionComponent<TestNavigationButtonProps>
