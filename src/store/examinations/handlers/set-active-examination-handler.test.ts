import { ExaminationSliceState, SetActiveExaminationAction } from '@store/examinations/types'
import { EyesResult } from '@shared/domain/eyes-result'
import { SetActiveExaminationHandler } from '@store/examinations/handlers/set-active-examination-handler'

const mockResult = {
  pinhole: EyesResult.create('0.1', '0.5'),
  normal: EyesResult.create('0.16', '0.125')
}

describe('SetActiveExaminationHandler', () => {
  test('set', () => {
    const state: ExaminationSliceState = {
      entities: [],
      activeExamination: undefined,
      deepLinkParams: undefined
    }
    const action: SetActiveExaminationAction = {
      type: 'a',
      payload: mockResult
    }

    const handler = new SetActiveExaminationHandler(state, action)
    handler.process()

    expect(state.activeExamination).toEqual(mockResult)
  })
})
