import { Draft } from '@reduxjs/toolkit'
import { ExaminationSliceState, SetActiveExaminationAction } from '@store/examinations/types'
import { EyesResult } from '@shared/domain/eyes-result'

export class SetActiveExaminationHandler {
  constructor(
    private state: Draft<ExaminationSliceState>,
    private action: SetActiveExaminationAction
  ) {}

  process() {
    this.state.activeExamination = {
      mobileId: this.mobileId,
      normal: EyesResult.copy(this.normal),
      pinhole: EyesResult.copy(this.pinhole)
    }
  }

  get normal() {
    return this.action.payload.normal
  }

  get pinhole() {
    return this.action.payload.pinhole
  }

  get mobileId() {
    return this.action.payload.mobileId
  }
}
