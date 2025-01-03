import { renderHook } from '@testing-library/react-native'
import { useAuth } from './useAuth'
import { useBackgroundSync } from './useBackgroundSync'
import { backgroundFetchTask } from '@shared/background-fetch'

jest.mock('../shared/background-fetch')

const mockRegister = backgroundFetchTask.register as jest.Mock
const mockUnregister = backgroundFetchTask.unregister as jest.Mock

jest.mock('./useAuth')
const mockUseAuth = useAuth as jest.Mock

describe('useBackgroundSync', () => {
  beforeEach(() => {
    mockRegister.mockClear()
    mockUnregister.mockClear()
    mockUseAuth.mockReset()
  })

  test('user logged in', async () => {
    mockUseAuth.mockImplementation(() => ({ isUserLoggedIn: true }))

    renderHook(() => useBackgroundSync())

    expect(mockRegister).toHaveBeenCalled()
  })

  test('user not logged in', async () => {
    mockUseAuth.mockImplementation(() => ({ isUserLoggedIn: false }))

    renderHook(() => useBackgroundSync())

    expect(mockUnregister).toHaveBeenCalled()
  })
})
