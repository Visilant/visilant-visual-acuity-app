import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as network } from 'react-native-offline'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from 'redux-persist'
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem'
import createSecureStore from 'redux-persist-expo-securestore'
import thunk from 'redux-thunk'
import authReducer from './auth/authSlice'
import { examinationSlice } from './examinations'
import settingsReducer from './settings/settings-slice'
import snackbarReducer from './snackbar'

const SecureStorage = createSecureStore()

const authPersistConfig = {
  key: 'auth',
  storage: SecureStorage
}

const persistConfig = {
  key: 'root',
  storage: ExpoFileSystemStorage,
  blacklist: ['auth', 'snackbar']
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)

const baseReducer = combineReducers({
  settings: settingsReducer,
  auth: persistedAuthReducer,
  snackbar: snackbarReducer,
  examination: examinationSlice.reducer,
  network: network
})

const persistedReducer = persistReducer(persistConfig, baseReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(thunk)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const persistor = persistStore(store)
