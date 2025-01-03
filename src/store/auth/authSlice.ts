import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '@store/index'
import { AuthPayload, AuthState, LoginResult } from './types'
import { LoginRequest } from '@api/auth-api'
import { LoginHandler } from './handlers/login-handler'
import { RefreshTokenHandler } from './handlers/refresh-token-handler'

const initialState: AuthState = {
  token: null,
  refresh_token: null
}

export const loginThunk = createAsyncThunk<
  LoginResult,
  LoginRequest,
  { dispatch: AppDispatch; state: RootState }
>('auth/login', async (credentials: LoginRequest, thunkAPI) => {
  const state = thunkAPI.getState()
  const handler = new LoginHandler(state, thunkAPI.dispatch, credentials)
  return await handler.process()
})

export const refreshThunk = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch; state: RootState }
>('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState()
  const handler = new RefreshTokenHandler(state, thunkAPI.dispatch)
  await handler.process()
})

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { token, refresh_token } }: PayloadAction<AuthPayload>) => {
      state.token = token
      state.refresh_token = refresh_token
    },
    clearCredentials: state => {
      state.token = null
      state.refresh_token = null
    }
  }
})

export const { setCredentials, clearCredentials } = slice.actions

export const selectIsUserLoggedIn = (state: RootState) => state.auth.token !== null
export const selectToken = (state: RootState) => state.auth.token
export const selectRefreshToken = (state: RootState) => state.auth.refresh_token

export default slice.reducer
