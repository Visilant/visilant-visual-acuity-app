import { AlertType } from '@components/Snackbar/types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store'

const ALERT_FADEOUT_START = 4000
const ALERT_REMOVAL_START = 4300

export interface AlertOptions {
  type: AlertType
  text: string
  namespace: string
}

export interface Alert extends AlertOptions {
  id: string
  visible: boolean
}

export interface SnackBarState {
  alerts: Alert[]
}

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    alerts: [] as Alert[]
  },
  reducers: {
    addAlert(state, action: PayloadAction<Alert>) {
      state.alerts.push(action.payload)
    },
    hideAlert(state, action: PayloadAction<{ id: string }>) {
      state.alerts = state.alerts.map(alert => ({
        ...alert,
        visible: action.payload.id === alert.id ? false : alert.visible
      }))
    },
    removeAlert(state, action: PayloadAction<{ id: string }>) {
      state.alerts = state.alerts.filter(alert => alert.id !== action.payload.id)
    }
  }
})

const { addAlert } = snackbarSlice.actions
export const { removeAlert, hideAlert } = snackbarSlice.actions

export const showAlert = createAsyncThunk('snackbar/showAlert', (alert: Alert, thunkAPI) => {
  thunkAPI.dispatch(addAlert(alert))

  setTimeout(() => {
    thunkAPI.dispatch(hideAlert({ id: alert.id }))
  }, ALERT_FADEOUT_START)

  setTimeout(() => {
    thunkAPI.dispatch(removeAlert({ id: alert.id }))
  }, ALERT_REMOVAL_START)
})

export const selectAlerts = (state: RootState) => state.snackbar.alerts

export default snackbarSlice.reducer
