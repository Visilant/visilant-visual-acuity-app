import { render } from '@jest/test-utils'
import { ExaminationList } from '@shared/domain/examination-list'
import DashboardScreen from '@screens/Dashboard/DashboardScreen'
import * as store from '@store'

jest.mock('@components/Icon')
const mockResource = new ExaminationList([])
jest.mock('@hooks/useExamination', () => ({ useExamination: () => mockResource }))
jest.mock('@screens/stack', () => ({ useStackNavigation: () => ({ navigate: jest.fn() }) }))
jest.spyOn(store, 'useAppSelector').mockImplementation(() => true)
jest.mock('@hooks/useUser', () => ({ useUser: () => ({ userName: 'User Name' }) }))

describe('Dashboard screen', () => {
  test('matches the snapshot', () => {
    const onboarding = render(<DashboardScreen />)

    expect(onboarding).toMatchSnapshot()
  })
})
