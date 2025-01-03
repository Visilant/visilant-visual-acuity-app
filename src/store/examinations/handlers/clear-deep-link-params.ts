import { Draft } from '@reduxjs/toolkit'
import { ExaminationSliceState } from '@store/examinations/types'

export class ClearDeepLinkParamsHandler {
  constructor(private state: Draft<ExaminationSliceState>) {}

  process() {
    this.state.deepLinkParams = undefined
  }
}
