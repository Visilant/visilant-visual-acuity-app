import { ApiResponse } from './types'
import { httpClient } from '@api/http-client'
import { EyeResult } from '@shared/domain/eyes-result'

export interface ExaminationDto {
  id: string
  mobileId: string
  patient_name: string
  comment: string
  mobileCreatedAt: string
  left?: EyeResult
  right?: EyeResult
  leftPinhole?: EyeResult
  rightPinhole?: EyeResult
}

export type CreateExaminationDto = Pick<
  ExaminationDto,
  | 'patient_name'
  | 'comment'
  | 'mobileCreatedAt'
  | 'left'
  | 'right'
  | 'leftPinhole'
  | 'rightPinhole'
  | 'mobileId'
>

export class ExaminationApi {
  static async getExaminations(): Promise<ApiResponse<ExaminationDto[]>> {
    return await httpClient.get<ApiResponse<ExaminationDto[]>>('/examination')
  }

  static async saveExamination(body: CreateExaminationDto): Promise<void> {
    return await httpClient.put('/examination', body)
  }
}
