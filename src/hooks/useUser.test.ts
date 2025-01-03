import { UserInfo } from '@shared/domain/user'
import * as store from '@store'
import { renderHook } from '@testing-library/react-native'
import { useUser } from '@hooks/useUser'

const mockUserInfo = new UserInfo()
const mockToken = 'mock-token'
const fromTokenSpy = jest.spyOn(UserInfo, 'fromToken').mockImplementation(() => mockUserInfo)
jest.spyOn(store, 'useAppSelector').mockImplementation(() => mockToken)

describe('useUser', () => {
  beforeEach(() => {
    fromTokenSpy.mockClear()
  })

  test('create user from token', async () => {
    const { result } = await renderHook(() => useUser())

    expect(fromTokenSpy).toHaveBeenCalledWith(mockToken)
    expect(result.current).toBe(mockUserInfo)
  })
})
