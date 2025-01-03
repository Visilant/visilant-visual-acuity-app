import { Syncable } from '@shared/syncable'
import { ExaminationData } from '@shared/domain/examination-type'

export interface ExaminationStore extends ExaminationData, Syncable {
  mobileId: string
  mobileCreatedAt: string
}
