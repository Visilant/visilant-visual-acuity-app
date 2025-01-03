import { EyesResult } from './eyes-result'

export enum ExaminationType {
  NormalRight = 'NormalRight',
  NormalLeft = 'NormalLeft',
  PinholeRight = 'PinholeRight',
  PinholeLeft = 'PinholeLeft'
}

export type ExaminationData = {
  patientName?: string
  comment?: string
  normal?: EyesResult
  pinhole?: EyesResult
}

export interface ExaminationResult extends ExaminationData {
  mobileCreatedAt?: Date
}

export interface ExaminationToSave extends ExaminationData {
  mobileId?: string
}
