import {
  DeepLinkParams,
  ExaminationSliceState,
  SetDeepLinkParamsAction
} from '@store/examinations/types'
import { SetDeepLinkParamsHandler } from './set-deep-link-params-handler'

const mockDeepLinkParams: DeepLinkParams = {
  callbackId: 'callback-id',
  cutoffs: 'cut'
}

const createMockAction = (
  callbackId: string,
  cutoffs: string | undefined
): SetDeepLinkParamsAction => ({
  type: '',
  payload: {
    callbackId,
    cutoffs
  }
})

describe('SetActiveExaminationByIdHandler', () => {
  test('Set by id', () => {
    const state: ExaminationSliceState = {
      entities: [],
      activeExamination: undefined,
      deepLinkParams: undefined
    }
    const action = createMockAction(mockDeepLinkParams.callbackId, mockDeepLinkParams.cutoffs)

    const handler = new SetDeepLinkParamsHandler(state, action)
    handler.process()

    expect(state.deepLinkParams).toEqual(mockDeepLinkParams)
  })
})
