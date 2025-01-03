import { SnellenChartRatio } from './snellen-chart'
import { UserSettings } from './settings'
import { UnitSystem } from './unit-system'

describe('Settings', () => {
  test.each<[SnellenChartRatio[], boolean]>([
    [[], false],
    [['0.1'], true]
  ])('hasTests value %p expected %p', (value, expected) => {
    const settings = new UserSettings(value, 1, UnitSystem.Metric)

    expect(settings.hasTests).toBe(expected)
  })
})
