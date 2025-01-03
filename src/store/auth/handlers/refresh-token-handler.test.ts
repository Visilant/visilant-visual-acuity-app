import { getMockState } from '@jest/mocks/root-state'
import { AuthApi, RefreshRequest, UserDto } from '@api/auth-api'
import { AuthPayload } from '../types'
import { ApiResponse } from '@api'
import { RefreshTokenHandler } from './refresh-token-handler'
import { setCredentials } from '..'

const mockRequest: RefreshRequest = {
  refresh_token: 'mock-refresh-token'
}

const mockCredentials: AuthPayload = {
  token: 'mock-token',
  refresh_token: 'mock-refresh-token'
}

const mockAuthPayload: ApiResponse<UserDto> = {
  data: {
    ...mockCredentials,
    user: {
      first_name: 'Nurse',
      last_name: 'One'
    }
  },
  statusCode: 200,
  message: 'Ok'
}

jest.mock('@api/auth-api', () => ({
  AuthApi: {
    refresh: jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(mockAuthPayload))
      .mockImplementationOnce(() => {
        throw new Error('HTTP ERROR')
      })
  }
}))

const mockDispatch = jest.fn().mockReturnValue({ unwrap: () => Promise.resolve() })

describe('RefreshHandler', () => {
  beforeEach(() => {
    mockDispatch.mockClear()
    const refreshMock = AuthApi.refresh as jest.Mock
    refreshMock.mockClear()
  })

  test('Refresh ok', async () => {
    const state = getMockState()
    const handler = new RefreshTokenHandler(state, mockDispatch)
    await handler.process()
    expect(AuthApi.refresh).toHaveBeenCalledWith(mockRequest)
    expect(mockDispatch).toHaveBeenCalledWith(setCredentials(mockCredentials))
  })

  test('Refresh error', async () => {
    const state = getMockState()
    const handler = new RefreshTokenHandler(state, mockDispatch)
    await expect(handler.process()).rejects.toThrow()
    expect(AuthApi.refresh).toHaveBeenCalledWith(mockRequest)
    expect(mockDispatch).not.toHaveBeenCalled()
  })

  test('Refresh no token', async () => {
    const state = getMockState()
    state.auth.refresh_token = null
    const handler = new RefreshTokenHandler(state, mockDispatch)
    await expect(handler.process()).rejects.toThrow('No refresh token')
    expect(AuthApi.refresh).not.toHaveBeenCalledWith(mockRequest)
    expect(mockDispatch).not.toHaveBeenCalled()
  })
})
