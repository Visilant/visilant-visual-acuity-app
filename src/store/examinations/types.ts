import { PayloadAction } from '@reduxjs/toolkit'
import { ExaminationStore } from '@shared/store/examination-store'
import { ExaminationResultsStore } from '@shared/store/examination-results-store'
import { ExaminationToSave } from '@shared/domain/examination-type'

export interface DeepLinkParams {
  callbackId: string
  cutoffs: string | undefined
}

export interface ExaminationSliceState {
  entities: ExaminationStore[]
  activeExamination: ExaminationResultsStore | undefined
  deepLinkParams: DeepLinkParams | undefined
}

export type SaveResultAction = PayloadAction<ExaminationToSave>

export type SetActiveExaminationAction = PayloadAction<ExaminationResultsStore>
export type SetActiveExaminationByIdAction = PayloadAction<{ mobileId: string }>
export type SetDeepLinkParamsAction = PayloadAction<DeepLinkParams | undefined>

export type MarkSyncedAction = PayloadAction<{ mobileId: string }>
