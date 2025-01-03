import { Draft } from '@reduxjs/toolkit'
import { ExaminationSliceState, SetActiveExaminationByIdAction } from '@store/examinations/types'

export class SetActiveExaminationByIdHandler {
  constructor(
    private state: Draft<ExaminationSliceState>,
    private action: SetActiveExaminationByIdAction
  ) {}

  process() {
    this.state.activeExamination = this.target
  }

  get targetId() {
    return this.action.payload.mobileId
  }

  get target() {
    return this.examinations.find(item => item.mobileId === this.targetId)
  }

  get examinations() {
    return this.state.entities
  }
}
