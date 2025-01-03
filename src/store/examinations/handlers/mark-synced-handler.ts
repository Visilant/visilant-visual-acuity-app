import { Draft } from '@reduxjs/toolkit'
import { ExaminationSliceState, MarkSyncedAction } from '@store/examinations/types'

export class MarkSyncedHandler {
  constructor(
    private state: Draft<ExaminationSliceState>,
    private action: MarkSyncedAction
  ) {}

  process() {
    if (this.target !== undefined) {
      this.target.isSynced = true
    }
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
