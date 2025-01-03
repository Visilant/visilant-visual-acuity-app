import { getMockState } from '@jest/mocks/root-state'
import { LoginHandler } from './login-handler'
import { LoginRequest, UserDto } from '@api/auth-api'
import { AuthPayload, LoginResult } from '../types'
import { ApiResponse } from '@api'
import { setCredentials } from '..'

jest.mock('@store')

const mockRequest: LoginRequest = {
  email: 'mock@visilant.org',
  password: 'nurse123'
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
    login: jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(mockAuthPayload))
      .mockImplementationOnce(() => Promise.reject())
  }
}))

const mockDispatch = jest.fn().mockReturnValue({ unwrap: () => Promise.resolve() })

describe('LoginHandler', () => {
  beforeEach(() => {
    mockDispatch.mockClear()
  })

  test('Login ok', async () => {
    const state = getMockState()
    const handler = new LoginHandler(state, mockDispatch, mockRequest)
    const result = await handler.process()
    expect(result).toBe(LoginResult.Success)
    expect(mockDispatch).toHaveBeenCalledWith(setCredentials(mockCredentials))
  })

  test('Login error', async () => {
    const state = getMockState()
    const handler = new LoginHandler(state, mockDispatch, mockRequest)
    const result = await handler.process()
    expect(result).toBe(LoginResult.Failed)
    expect(mockDispatch).not.toHaveBeenCalled()
  })
})
