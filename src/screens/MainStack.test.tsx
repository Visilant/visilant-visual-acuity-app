import * as authHook from '@hooks/useAuth'
import { render, screen } from '@jest/test-utils'
import { MainStack } from '@screens/MainStack'
import { NavigationContainer } from '@react-navigation/native'

const mockUseAuth = {
  isUserLoggedIn: false
}

let useAuthSpy = jest.spyOn(authHook, 'useAuth').mockImplementation(() => mockUseAuth)

describe('MainStack', () => {
  beforeEach(() => {
    useAuthSpy.mockClear()
  })

  test('display login when logged out', () => {
    render(
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    )

    screen.getByText('LOGIN')
  })

  test('display dashboard when logged in', () => {
    useAuthSpy = jest
      .spyOn(authHook, 'useAuth')
      .mockImplementation(() => ({ ...mockUseAuth, isUserLoggedIn: true }))

    render(
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    )

    screen.getByText('Your testing history')
  })
})
