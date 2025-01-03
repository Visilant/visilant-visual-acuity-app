import { fireEvent, render, screen } from '@jest/test-utils'
import { OrientationInstructions } from '@screens/Test/components/OrientationIstructions/OrientationInstructions'
const mockNavigate = jest.fn()
jest.mock('@screens/stack', () => ({ useStackNavigation: () => ({ navigate: mockNavigate }) }))

describe('Orientation Instructions Screen', () => {
  test('matches the snapshot', async () => {
    const orientationScreen = render(<OrientationInstructions />)

    expect(orientationScreen).toMatchSnapshot()
  })

  test('the Home button navigates away', () => {
    render(<OrientationInstructions />)
    const btn = screen.getByTestId('orientation-instructions.home')
    fireEvent(btn, 'press')

    expect(mockNavigate).toBeCalledTimes(1)
  })

  test('renders instructions', async () => {
    render(<OrientationInstructions />)
    screen.getByText('Rotate your phone to start the test!')
  })
})
