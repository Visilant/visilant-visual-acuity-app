import { mockedNavigation } from '@jest/mocks/navigation'
import { fireEvent, render, screen } from '@jest/test-utils'
import Onboarding from './Onboarding'

describe('Onboarding screen', () => {
  test('matches the snapshot', async () => {
    const onboarding = render(
      <Onboarding navigation={mockedNavigation} route={{ key: '', name: 'Onboarding' }} />
    )

    expect(onboarding).toMatchSnapshot()
  })

  test('the "start test" button navigates away', () => {
    render(<Onboarding navigation={mockedNavigation} route={{ key: '', name: 'Onboarding' }} />)

    // eslint-disable-next-line quotes
    const btn = screen.getByText("LET'S START")
    fireEvent(btn, 'press')

    expect(mockedNavigation.navigate).toBeCalledTimes(1)
  })

  test('renders starter instructions', async () => {
    render(<Onboarding navigation={mockedNavigation} route={{ key: '', name: 'Onboarding' }} />)

    screen.getByText('Find the place')
    screen.getByText('Make sure the screen is easy to see in an indoor or shaded environment.')
  })
})
