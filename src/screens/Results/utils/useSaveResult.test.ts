import { AppConfig } from '@config'
import { snackbarFeedback, useSaveResult } from '@screens/Results/utils/useSaveResult'
import { EyesResult } from '@shared/domain/eyes-result'
import * as store from '@store'
import { renderHook } from '@testing-library/react-native'
import { Linking } from 'react-native'

const mockLinking = jest.fn()
jest.spyOn(Linking, 'canOpenURL').mockImplementation(() => Promise.resolve(true))
jest.spyOn(Linking, 'openURL').mockImplementation(mockLinking)

jest.mock('@store/examinations', () => ({
  clearActiveResults: jest.fn(),
  setDeepLinkParams: jest.fn(),
  clearDeepLinkParams: jest.fn(),
  saveResult: value => value
}))

const mockNavigate = jest.fn()
jest.mock('@screens/stack', () => ({ useStackNavigation: () => ({ navigate: mockNavigate }) }))

const mockAddAlert = jest.fn()
jest.mock('@hooks/useSnackbar', () => ({ useSnackbar: () => ({ addAlert: mockAddAlert }) }))

const mockDispatch = jest.fn()
const mockUseAppSelector = jest.fn()

jest.mock('@store', () => ({
  __esModule: true,
  useAppSelector: () => mockUseAppSelector,
  useAppDispatch: () => mockDispatch
}))

jest.spyOn(store, 'useAppSelector').mockImplementation(mockUseAppSelector)
jest.spyOn(store, 'useAppDispatch').mockImplementation(() => mockDispatch)
const mockDeepLinkBaseUrl = 'https://baseurl'
jest.spyOn(AppConfig, 'getConfig').mockImplementation(() => ({
  deepLinkBaseUrl: mockDeepLinkBaseUrl,
  apiBaseUrl: '',
  authApiBaseUrl: '',
  tokenCheckInterval: 0
}))

describe('useSaveResult', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
    mockAddAlert.mockClear()
    mockDispatch.mockClear()
    mockUseAppSelector.mockClear()
  })

  test('save success no deeplinking', async () => {
    mockUseAppSelector.mockImplementationOnce(() => undefined)
    const { result } = renderHook(() => useSaveResult())

    const mockEye: EyesResult = { left: '0.1', right: '0.125' }

    const mockValues = {
      mobileId: '',
      patientName: '',
      comment: '',
      normal: mockEye,
      pinhole: mockEye
    }

    await result.current.save(mockValues)

    expect(mockDispatch).toHaveBeenCalledWith(mockValues)
    expect(mockNavigate).toHaveBeenCalledWith('Dashboard')
    expect(mockAddAlert).toHaveBeenCalledWith(snackbarFeedback.success)
  })

  test('save success deeplinking', async () => {
    const mockCallbackId = 'asdasd'
    const mockEye: EyesResult = { left: '0.1', right: '0.125' }
    const mockValues = {
      mobileId: '',
      patientName: '',
      comment: '',
      normal: mockEye,
      pinhole: mockEye
    }
    const mockResultURI = encodeURIComponent('0.1;0.125;0.1;0.125')
    const mockUrl = `${mockDeepLinkBaseUrl}/${mockCallbackId}/${mockResultURI}`

    mockUseAppSelector.mockImplementationOnce(() => ({ callbackId: mockCallbackId }))
    const { result } = renderHook(() => useSaveResult())

    await result.current.save(mockValues)

    expect(mockLinking).toHaveBeenCalledWith(mockUrl)
    expect(mockDispatch).toHaveBeenNthCalledWith(1, undefined)
    expect(mockDispatch).toHaveBeenNthCalledWith(2, undefined)
    expect(mockNavigate).toHaveBeenCalledWith('Dashboard')
    expect(mockAddAlert).toHaveBeenCalledWith(snackbarFeedback.success)
  })
})
