import { ExaminationSliceState, SaveResultAction } from '@store/examinations/types'
import { SaveResultHandler } from '@store/examinations/handlers/save-result-handler'
import { EyesResult } from '@shared/domain/eyes-result'

import { UUID } from '@shared/uuid'
import { ExaminationStore } from '@shared/store/examination-store'
import produce from 'immer'

jest.spyOn(UUID, 'v4').mockImplementation(() => mockExamination.mobileId)

const mockExamination = {
  isSynced: false,
  mobileId: '65645ebf-ff99-4da6-8bce-090f7c7b703c',
  normal: { left: '0.2', right: '0.1' } as EyesResult,
  patientName: 'Mock Name',
  comment: 'this is a comment',
  pinhole: { left: '0.2', right: '0.1' } as EyesResult,
  mobileCreatedAt: '2024-01-17T13:14:46.641Z'
}

const mockUpdatedExamination = produce(mockExamination, draft => {
  draft.patientName = 'Updated Mock Name'
  draft.comment = 'This is an updated comment'
  draft.normal.right = '0.16'
  draft.normal.left = '0.8'
  draft.pinhole.right = '0.125'
  draft.pinhole.left = '0.33'
})

const createMockAction = (examination: ExaminationStore): SaveResultAction => {
  return {
    type: '',
    payload: {
      mobileId: examination.mobileId,
      patientName: examination.patientName,
      comment: examination.comment,
      normal: { ...examination.normal },
      pinhole: { ...examination.pinhole }
    }
  }
}

describe('SaveResultHandler', () => {
  test('save to store', () => {
    const state: ExaminationSliceState = {
      entities: [],
      activeExamination: undefined,
      deepLinkParams: undefined
    }
    const action = createMockAction(mockExamination)

    const handler = new SaveResultHandler(state, action)
    jest.useFakeTimers().setSystemTime(new Date('2024-01-17T13:14:46.641Z'))
    handler.process()

    expect(state.entities).toEqual([mockExamination])
  })

  test('update examination', () => {
    const state: ExaminationSliceState = {
      entities: [mockExamination],
      activeExamination: undefined,
      deepLinkParams: undefined
    }

    const action = createMockAction(mockUpdatedExamination)

    const handler = new SaveResultHandler(state, action)
    handler.process()

    expect(state.entities).toEqual([mockUpdatedExamination])
  })
})
