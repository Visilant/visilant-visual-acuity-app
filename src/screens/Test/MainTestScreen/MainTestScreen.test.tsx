import { render } from '@jest/test-utils'
import { ScreenState } from '../utils/screen-state'
import '@testing-library/jest-native'
import MainTestScreen from './MainTestScreen'

const mockState = ScreenState.testing

const mockNavigate = jest.fn()
jest.mock('@screens/stack', () => ({
  useStackNavigation: () => ({ navigate: mockNavigate }),
  useStackRoute: () => ({ params: {} })
}))
jest.mock('../utils/useMainTestScreenRotation', () => ({
  useMainTestScreenRotation: () => ({
    screenState: mockState
  })
}))

jest.mock('../utils/useSetNavigationOrientation', () => ({
  useSetNavigationOrientation: () => {}
}))

jest.mock('@screens/Test/components/TestingFlow', () => ({
  TestingFlow: () => <>TestingFlowMock</>
}))

describe('Main test screen', () => {
  // todo: test orientation screen
  test('render testing flow', async () => {
    const mainTestScreen = render(<MainTestScreen />)

    expect(mainTestScreen).toMatchSnapshot()
  })
})
