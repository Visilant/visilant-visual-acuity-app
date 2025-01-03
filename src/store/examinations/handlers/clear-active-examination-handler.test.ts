import { ExaminationSliceState } from '@store/examinations/types'
import { ClearActiveExaminationHandler } from '@store/examinations/handlers/clear-active-examination-handler'

describe('ClearActiveExaminationHandler', () => {
  test('clear active', () => {
    const state: ExaminationSliceState = {
      entities: [],
      activeExamination: {},
      deepLinkParams: undefined
    }

    const handler = new ClearActiveExaminationHandler(state)
    handler.process()

    expect(state.activeExamination).toBe(undefined)
  })
})
