import { ExaminationSliceState, MarkSyncedAction } from '../types'
import { MarkSyncedHandler } from './mark-synced-handler'
import { ExaminationStore } from '../../../shared/store/examination-store'

const createMockExamination = (): ExaminationStore => ({
  mobileId: 'mobile-id-1',
  patientName: 'paitent name',
  comment: 'this is a comment',
  mobileCreatedAt: '2024-01-10T15:12:45+0100',
  normal: { right: '0.1', left: '0.2' },
  pinhole: { right: '0.1', left: '0.2' },
  isSynced: false
})

const createMockAction = (mobileId: string): MarkSyncedAction => ({
  type: '',
  payload: {
    mobileId
  }
})

describe('MarkSyncedHandler', () => {
  test('mark by mobileId', () => {
    const mockExamination = createMockExamination()

    const state: ExaminationSliceState = {
      entities: [mockExamination],
      activeExamination: undefined,
      deepLinkParams: undefined
    }
    const action = createMockAction(mockExamination.mobileId)

    const handler = new MarkSyncedHandler(state, action)
    handler.process()

    expect(state.entities[0].isSynced).toBe(true)
  })

  test('dont trigger if not existing', () => {
    const state: ExaminationSliceState = {
      entities: [createMockExamination()],
      activeExamination: undefined,
      deepLinkParams: undefined
    }
    const action = createMockAction('bad-mobile-id')

    const handler = new MarkSyncedHandler(state, action)
    handler.process()

    expect(state.entities[0].isSynced).toBe(false)
  })
})
