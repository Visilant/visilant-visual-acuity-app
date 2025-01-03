import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '@store'

import {
  DeepLinkParams,
  ExaminationSliceState,
  MarkSyncedAction,
  SaveResultAction,
  SetActiveExaminationAction,
  SetActiveExaminationByIdAction,
  SetDeepLinkParamsAction
} from '@store/examinations/types'

import { SaveResultHandler } from '@store/examinations/handlers/save-result-handler'
import { GetExaminationsFulfilledHandler } from '@store/examinations/handlers/get-examinations-fulfilled-handler'
import { CreateExaminationDto, ExaminationApi } from '@api/examination-api'
import { SyncExaminationHandler } from '@store/examinations/handlers/sync-examination-handler'
import { MarkSyncedHandler } from '@store/examinations/handlers/mark-synced-handler'
import { SetActiveExaminationHandler } from '@store/examinations/handlers/set-active-examination-handler'
import { ClearActiveExaminationHandler } from '@store/examinations/handlers/clear-active-examination-handler'
import { ExaminationResults } from '@shared/domain/examination-results'
import { ExaminationResultsMapper } from '@shared/mappers/examination-results-mapper'
import { ExaminationResultsStore } from '@shared/store/examination-results-store'
import { SetActiveExaminationByIdHandler } from '@store/examinations/handlers/set-active-examination-by-id-handler'
import { ExaminationStore } from '@shared/store/examination-store'
import { SetDeepLinkParamsHandler } from './handlers/set-deep-link-params-handler'
import { ClearDeepLinkParamsHandler } from './handlers/clear-deep-link-params'

const initialState: ExaminationSliceState = {
  entities: [],
  activeExamination: undefined,
  deepLinkParams: undefined
}

export const getExaminationsThunk = createAsyncThunk('examinations/getExaminations', async () => {
  return await ExaminationApi.getExaminations()
})

export const createExaminationThunk = createAsyncThunk(
  'examinations/createExamination',
  async (createDto: CreateExaminationDto) => {
    return await ExaminationApi.saveExamination(createDto)
  }
)

export const syncExaminations = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch; state: RootState }
>('examinations/updateExamination', async (_, thunkAPI) => {
  const state = thunkAPI.getState()
  const handler = new SyncExaminationHandler(state, thunkAPI.dispatch)
  await handler.process()
})

export const examinationSlice = createSlice({
  name: 'observations',
  initialState,
  reducers: {
    saveResult: (state, action: SaveResultAction) => new SaveResultHandler(state, action).process(),
    markSynced: (state, action: MarkSyncedAction) => new MarkSyncedHandler(state, action).process(),
    setActiveExamination: {
      reducer: (state, action: SetActiveExaminationAction) =>
        new SetActiveExaminationHandler(state, action).process(),
      prepare: (results: ExaminationResults) => ({
        payload: ExaminationResultsMapper.fromDomainToStore(results)
      })
    },
    setActiveExaminationById: (state, action: SetActiveExaminationByIdAction) =>
      new SetActiveExaminationByIdHandler(state, action).process(),
    clearActiveResults: state => new ClearActiveExaminationHandler(state).process(),
    setDeepLinkParams: (state, action: SetDeepLinkParamsAction) =>
      new SetDeepLinkParamsHandler(state, action).process(),
    clearDeepLinkParams: state => new ClearDeepLinkParamsHandler(state).process()
  },
  extraReducers: builder => {
    builder.addCase(getExaminationsThunk.fulfilled, (state, action) =>
      new GetExaminationsFulfilledHandler(state, action).process()
    )
  }
})

export const {
  saveResult,
  markSynced,
  setActiveExamination,
  clearActiveResults,
  setActiveExaminationById,
  setDeepLinkParams,
  clearDeepLinkParams
} = examinationSlice.actions

export const selectExaminations = (state: RootState) => state.examination.entities
export const selectActiveExamination = (state: RootState): ExaminationResultsStore | undefined =>
  state.examination.activeExamination
export const selectDeepLinkParams = (state: RootState): DeepLinkParams | undefined =>
  state.examination.deepLinkParams
export const selectExaminationById = (mobileId?: string) => {
  return (state: RootState): ExaminationStore | undefined =>
    state.examination.entities.find(entity => entity.mobileId === mobileId)
}
