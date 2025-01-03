import { Draft } from '@reduxjs/toolkit'
import { ExaminationSliceState } from '@store/examinations/types'

export class ClearActiveExaminationHandler {
  constructor(private state: Draft<ExaminationSliceState>) {}

  process() {
    this.state.activeExamination = undefined
  }
}
