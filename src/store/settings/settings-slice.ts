import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@store/index'
import { SettingsSliceState } from './types'
import { SettingsApi, SettingsUpdateRequest } from '@api'
import { GetSettingsFulfilledHandler } from './handlers/get-settings-fulfilled-handler'

const initialState: SettingsSliceState = {
  locale: 'en',
  showDashboardInstructions: true,
  userSettings: undefined
}

export const getSettingsThunk = createAsyncThunk('settings/getSettings', async () => {
  return await SettingsApi.getSettings()
})

export const updateSettingsThunk = createAsyncThunk(
  'settings/updateSettings',
  async (update: SettingsUpdateRequest, thunkAPI) => {
    await SettingsApi.updateSettings(update)
    thunkAPI.dispatch(getSettingsThunk())
  }
)

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    hideDashboardInstructions: state => {
      state.showDashboardInstructions = false
    }
  },
  extraReducers: builder => {
    builder.addCase(getSettingsThunk.fulfilled, (state, action) =>
      new GetSettingsFulfilledHandler(state, action).process()
    )
  }
})

export const selectShowDashboardInstructions = (state: RootState) =>
  state.settings.showDashboardInstructions

export const selectUserSettings = (state: RootState) => state.settings.userSettings

export const { hideDashboardInstructions } = settingsSlice.actions
export default settingsSlice.reducer
