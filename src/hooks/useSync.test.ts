import { renderHook } from '@testing-library/react-native'
import { useSync } from '@hooks/useSync'
import * as authHook from '@hooks/useAuth'
import * as networkHook from '@hooks/useNetworkConnection'
import * as schedulerHook from '@hooks/useScheduler'

const mockDispatch = jest.fn().mockImplementation(value => value)
jest.mock('@store', () => ({ useAppDispatch: () => mockDispatch }))

const mockUseAuth = {
  isUserLoggedIn: false,
  logout: () => {},
  login: () => Promise.resolve(true)
}

const useAuthSpy = jest.spyOn(authHook, 'useAuth').mockImplementation(() => mockUseAuth)
const useNetworkSpy = jest
  .spyOn(networkHook, 'useNetworkConnection')
  .mockImplementation(() => ({ isConnected: true }))
jest.spyOn(schedulerHook, 'useScheduler').mockImplementation(cb => ({
  start: () => {
    cb()
  },
  stop: () => {}
}))

const mockSyncExaminationAction = 'syncExaminations'
jest.mock('@store/examinations', () => ({ syncExaminations: () => mockSyncExaminationAction }))
describe('useSync', () => {
  beforeEach(() => {
    mockDispatch.mockClear()
    useAuthSpy.mockClear()
    useNetworkSpy.mockClear()
  })

  test('dont sync if not logged in', () => {
    useNetworkSpy.mockReturnValue({ isConnected: false })
    renderHook(() => useSync())

    expect(mockDispatch).not.toHaveBeenCalled()
  })

  test('dont sync if offline', () => {
    useAuthSpy.mockReturnValue({ ...mockUseAuth, isUserLoggedIn: true })
    useNetworkSpy.mockReturnValue({ isConnected: false })
    renderHook(() => useSync())

    expect(mockDispatch).not.toHaveBeenCalled()
  })

  test('sync if after logged in', async () => {
    const result = await renderHook(() => useSync())

    expect(mockDispatch).not.toHaveBeenCalled()

    useAuthSpy.mockReturnValue({ ...mockUseAuth, isUserLoggedIn: true })
    useNetworkSpy.mockReturnValue({ isConnected: true })

    await result.rerender(undefined)

    expect(mockDispatch).toHaveBeenCalledWith(mockSyncExaminationAction)
  })
})
