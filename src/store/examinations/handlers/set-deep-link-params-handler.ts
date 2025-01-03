import { Draft } from '@reduxjs/toolkit'
import { ExaminationSliceState, SetDeepLinkParamsAction } from '../types'

export class SetDeepLinkParamsHandler {
  constructor(
    private state: Draft<ExaminationSliceState>,
    private action: SetDeepLinkParamsAction
  ) {}

  process() {
    this.state.deepLinkParams = this.action.payload
  }
}
