import { Draft } from '@reduxjs/toolkit'
import { ExaminationSliceState, SaveResultAction } from '@store/examinations/types'
import { Examination } from '@shared/domain/examination'
import { ExaminationMapper } from '@shared/mappers/examination-mapper'
import { ExaminationStore } from '@shared/store/examination-store'

export class SaveResultHandler {
  constructor(
    private state: Draft<ExaminationSliceState>,
    private action: SaveResultAction
  ) {}

  process() {
    if (this.existing) {
      this.update()
    } else {
      this.create()
    }
  }

  update() {
    if (this.existing) {
      const { patientName, comment, pinhole, normal } = this.action.payload

      this.existing.patientName = patientName
      this.existing.comment = comment
      this.existing.normal = normal
      this.existing.pinhole = pinhole
      this.existing.isSynced = false
    }
  }

  create() {
    const { patientName, comment, pinhole, normal } = this.action.payload

    const examination = Examination.fromResults({ patientName, comment, normal, pinhole })
    const examinationStore = ExaminationMapper.fromDomainToStore(examination)

    this.state.entities.push(examinationStore)
  }

  get existing(): ExaminationStore | undefined {
    return this.state.entities.find(item => item.mobileId === this.targetId)
  }

  get targetId(): string | undefined {
    return this.action.payload.mobileId
  }
}
