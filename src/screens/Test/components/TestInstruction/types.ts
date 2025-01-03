import { FunctionComponent } from 'react'
import { ExaminationType } from '@shared/domain/examination-type'
export interface Props {
  type: ExaminationType
}
export type TestInstructionComponent = FunctionComponent<Props>
