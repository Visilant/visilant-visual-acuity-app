import { UserSettings } from '../domain/settings'
import { UnitSystem } from '../domain/unit-system'
import { UserSettingsMapper } from './settings-mapper'

const mockUserSettings = new UserSettings(['0.1', '0.125'], 1, UnitSystem.Metric)
const mockSettingsDto = {
  measurement_distance: 1,
  units: UnitSystem.Metric,
  cutoffs_selected: '0.1;0.125'
}
describe('SettingsMapper', () => {
  test('fromDto', () => {
    const result = UserSettingsMapper.fromDto(mockSettingsDto)

    expect(result).toEqual(mockUserSettings)
  })
  test('toUpdateRequest', () => {
    const result = UserSettingsMapper.toUpdateRequest(mockUserSettings)

    expect(result).toEqual(mockSettingsDto)
  })
})
