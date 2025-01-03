import { GetExaminationsFulfilledHandler } from '@store/examinations/handlers/get-examinations-fulfilled-handler'
import { ExaminationSliceState } from '@store/examinations/types'
import { PayloadAction } from '@reduxjs/toolkit'
import { ApiResponse } from '@api'
import { ExaminationDto } from '@api/examination-api'
import { ExaminationMapper } from '@shared/mappers/examination-mapper'

const createMockAction = (
  payload: ExaminationDto[]
): PayloadAction<ApiResponse<ExaminationDto[]>> => ({
  type: '',
  payload: {
    data: payload,
    message: 'ok',
    statusCode: 200
  }
})

const mockExamination: ExaminationDto = {
  id: 'id-1',
  mobileId: 'mobile-id-1',
  patient_name: 'patient name',
  comment: 'comment',
  mobileCreatedAt: '2024-01-10T15:12:45+0100',
  right: '0.1',
  left: '0.2',
  leftPinhole: '0.1',
  rightPinhole: '0.2'
}

const mockExaminationStore = ExaminationMapper.fromDtoToStore(mockExamination)

describe('GetExaminationsFulfilledHandler', () => {
  test('add to empty list', () => {
    const state: ExaminationSliceState = {
      entities: [],
      activeExamination: undefined,
      deepLinkParams: undefined
    }
    const payload: ExaminationDto[] = [mockExamination]
    const action = createMockAction(payload)

    const handler = new GetExaminationsFulfilledHandler(state, action)
    handler.process()

    expect(state.entities).toEqual([mockExaminationStore])
  })

  test('dont add twice', () => {
    const state: ExaminationSliceState = {
      entities: [mockExaminationStore],
      activeExamination: undefined,
      deepLinkParams: undefined
    }
    const payload: ExaminationDto[] = [mockExamination]
    const action = createMockAction(payload)

    const handler = new GetExaminationsFulfilledHandler(state, action)
    handler.process()

    expect(state.entities).toEqual([mockExaminationStore])
  })

  test('overwrite if synced', () => {
    const examinationStore = ExaminationMapper.fromDtoToStore(mockExamination)
    examinationStore.isSynced = true

    const state: ExaminationSliceState = {
      entities: [examinationStore],
      activeExamination: undefined,
      deepLinkParams: undefined
    }

    const examinationPayload = { ...mockExamination, patient_name: 'Updated Patient Name' }

    const payload: ExaminationDto[] = [examinationPayload]
    const action = createMockAction(payload)

    const expected = ExaminationMapper.fromDtoToStore(examinationPayload)

    const handler = new GetExaminationsFulfilledHandler(state, action)
    handler.process()

    expect(state.entities).toEqual([expected])
  })

  test('dont overwrite if not synced', () => {
    const examinationStore = ExaminationMapper.fromDtoToStore(mockExamination)
    examinationStore.isSynced = false

    const state: ExaminationSliceState = {
      entities: [examinationStore],
      activeExamination: undefined,
      deepLinkParams: undefined
    }

    const examinationPayload = { ...mockExamination, patient_name: 'Updated Patient Name' }

    const payload: ExaminationDto[] = [examinationPayload]
    const action = createMockAction(payload)

    const handler = new GetExaminationsFulfilledHandler(state, action)
    handler.process()

    expect(state.entities).toEqual([examinationStore])
  })
})
