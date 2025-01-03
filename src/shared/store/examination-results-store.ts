import { EyesResult } from '@shared/domain/eyes-result'

export interface ExaminationResultsStore {
  mobileId?: string
  normal?: EyesResult
  pinhole?: EyesResult
}
