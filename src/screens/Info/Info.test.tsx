import { mockedNavigation } from '@jest/mocks/navigation'
import { fireEvent, render, screen } from '@jest/test-utils'
import React from 'react'
import Info from './Info'

jest.mock(
  'react-native-safe-area-context',
  () => jest.requireActual('react-native-safe-area-context/jest/mock').default
)

describe('Info screen', () => {
  test('matches the snapshot', async () => {
    const info = render(<Info navigation={mockedNavigation} route={{ key: '', name: 'Info' }} />)
    expect(info).toMatchSnapshot()
  })

  test('the "start test" button navigates away', () => {
    render(<Info navigation={mockedNavigation} route={{ key: '', name: 'Info' }} />)

    const btn = screen.getByText('ONBOARDING')
    fireEvent(btn, 'press')

    expect(mockedNavigation.navigate).toBeCalledTimes(1)
  })

  test('renders starter instructions', async () => {
    render(<Info navigation={mockedNavigation} route={{ key: '', name: 'Info' }} />)

    screen.getByText('Info & help')
    screen.getByText('How can you use it?')
    screen.getByText(
      'At Visilant, we strive to enable equitable access to eye care using telemedicine and artificial intelligence. Our intelligent telemedicine platform is designed to reach patients in the last mile and integrate them into the eye care system, so that no patient has to experience vision loss or blindness from preventable causes.'
    )
  })
})
