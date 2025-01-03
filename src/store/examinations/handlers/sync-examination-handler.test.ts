import { SyncExaminationHandler } from '@store/examinations/handlers/sync-examination-handler'
import { getMockState } from '@jest/mocks/root-state'
import { ExaminationStore } from '@shared/store/examination-store'
jest.mock('@store')

const mockCreateExaminationThunkAction = 'mock-createExaminationThunk'
const mockMarkSyncedAction = 'mock-markSynced'
jest.mock('@store/examinations', () => ({
  createExaminationThunk: () => mockCreateExaminationThunkAction,
  markSynced: () => mockMarkSyncedAction
}))

const mockExamination: ExaminationStore = {
  mobileId: 'mobile-id-1',
  patientName: 'patient name',
  comment: 'this is a comment',
  mobileCreatedAt: '2024-01-10T15:12:45+0100',
  normal: { right: '0.1', left: '0.2' },
  pinhole: { right: '0.1', left: '0.2' },
  isSynced: false
}

const mockDispatch = jest.fn().mockReturnValue({ unwrap: () => Promise.resolve() })

describe('SyncExaminationHandler', () => {
  beforeEach(() => {
    mockDispatch.mockClear()
  })

  test('send all unsynced', async () => {
    const state = getMockState()

    state.examination.entities = [mockExamination]

    const handler = new SyncExaminationHandler(state, mockDispatch)
    await handler.process()

    expect(mockDispatch).toHaveBeenCalledWith(mockCreateExaminationThunkAction)
    expect(mockDispatch).toHaveBeenCalledWith(mockMarkSyncedAction)
  }, 30000)
})
