import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { ExaminationSliceState } from '@store/examinations/types'
import { ApiResponse } from '@api'
import { ExaminationDto } from '@api/examination-api'
import { ExaminationMapper } from '@shared/mappers/examination-mapper'
import { ExaminationStore } from '@shared/store/examination-store'

export class GetExaminationsFulfilledHandler {
  constructor(
    private state: Draft<ExaminationSliceState>,
    private action: PayloadAction<ApiResponse<ExaminationDto[]>>
  ) {}

  process() {
    this.applyUpdates()
  }

  applyUpdates() {
    this.updates.forEach(exam => {
      const [existing, index] = this.findExamination(exam)

      if (!existing) {
        this.addExamination(exam)
      } else if (existing.isSynced) {
        this.updateExamination(exam, index)
      }
    })
  }

  mapExamination(examination: ExaminationDto): ExaminationStore {
    return ExaminationMapper.fromDtoToStore(examination)
  }

  updateExamination(examination: ExaminationDto, index: number) {
    this.state.entities[index] = this.mapExamination(examination)
  }

  addExamination(examination: ExaminationDto) {
    const newExamination = this.mapExamination(examination)

    this.state.entities.push(newExamination)
  }

  findExamination(update: ExaminationDto): [ExaminationStore | undefined, number] {
    const index = this.state.entities.findIndex(item => item.mobileId === update.mobileId)
    const item = this.state.entities[index]

    return [item, index]
  }

  get updates() {
    return this.action.payload.data
  }
}
