import { ExaminationStore } from '@shared/store/examination-store'
import { ExaminationSliceState, MarkSyncedAction } from '@store/examinations/types'
import { SetActiveExaminationByIdHandler } from '@store/examinations/handlers/set-active-examination-by-id-handler'

const createMockExamination = (): ExaminationStore => ({
  mobileId: 'mobile-id-1',
  comment: 'this is a comment',
  patientName: 'patient name',
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

describe('SetActiveExaminationByIdHandler', () => {
  test('Set by id', () => {
    const mockExamination = createMockExamination()

    const state: ExaminationSliceState = {
      entities: [mockExamination],
      activeExamination: undefined,
      deepLinkParams: undefined
    }
    const action = createMockAction(mockExamination.mobileId)

    const handler = new SetActiveExaminationByIdHandler(state, action)
    handler.process()

    expect(state.activeExamination).toEqual(mockExamination)
  })
})
