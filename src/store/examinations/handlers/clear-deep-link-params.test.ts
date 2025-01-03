import { ExaminationSliceState } from '@store/examinations/types'
import { ClearDeepLinkParamsHandler } from './clear-deep-link-params'

describe('ClearDeepLinkParamsHandler', () => {
  test('clear params', () => {
    const state: ExaminationSliceState = {
      entities: [],
      activeExamination: {},
      deepLinkParams: {
        callbackId: 'test-id',
        cutoffs: undefined
      }
    }

    const handler = new ClearDeepLinkParamsHandler(state)
    handler.process()

    expect(state.deepLinkParams).toBe(undefined)
  })
})
