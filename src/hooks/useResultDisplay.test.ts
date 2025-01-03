import * as Settings from '@hooks/useSettings'
import { renderHook } from '@testing-library/react-native'
import { EMPTY_CHARACTER, useResultDisplay } from '@hooks/useResultDisplay'
import { UserSettings } from '@shared/domain/settings'
import { UnitSystem } from '@shared/domain/unit-system'
import { SnellenChartDictionary, SnellenChartRatio } from '@shared/domain/snellen-chart'
import { ManualTestResult } from '@shared/domain/manual-test-result'

const useSettingsSpy = jest.spyOn(Settings, 'useSettings')

const getMockSettingsResource = (units: UnitSystem) => ({
  updateSettings: () => Promise.resolve(),
  settings: new UserSettings([], 1, units)
})

describe('useResultDisplay', () => {
  test.each([
    [UnitSystem.Metric, '6'],
    [UnitSystem.Imperial, '20']
  ])('base', (units, expected) => {
    useSettingsSpy.mockImplementation(() => getMockSettingsResource(units))

    const { result } = renderHook(() => useResultDisplay())

    expect(result.current.base).toBe(expected)
  })

  test('format Metric', () => {
    useSettingsSpy.mockImplementation(() => getMockSettingsResource(UnitSystem.Metric))

    const { result } = renderHook(() => useResultDisplay())

    const ratio = '0.1'

    const expected = SnellenChartDictionary[ratio].metric.toString()
    const value = result.current.format(ratio)

    expect(value).toBe(expected)
  })

  test('format Imperial', () => {
    useSettingsSpy.mockImplementation(() => getMockSettingsResource(UnitSystem.Imperial))

    const { result } = renderHook(() => useResultDisplay())

    const ratio = '0.1'

    const expected = SnellenChartDictionary[ratio].imperial.toString()
    const value = result.current.format(ratio)

    expect(value).toBe(expected)
  })

  test('format undefined', () => {
    useSettingsSpy.mockImplementation(() => getMockSettingsResource(UnitSystem.Metric))

    const { result } = renderHook(() => useResultDisplay())

    const value = result.current.format(undefined)

    expect(value).toBe(EMPTY_CHARACTER)
  })

  test('createResultText undefined', () => {
    useSettingsSpy.mockImplementation(() => getMockSettingsResource(UnitSystem.Metric))
    const { result } = renderHook(() => useResultDisplay())
    const value = result.current.createResultText(undefined)
    expect(value).toBe(EMPTY_CHARACTER)
  })

  test.each([
    ['0.1' as SnellenChartRatio, '6/60'],
    ['0.16' as SnellenChartRatio, '6/38'],
    ['1.0' as SnellenChartRatio, '6/6'],
    [ManualTestResult.FingerCounting, 'FC'],
    [ManualTestResult.HandMovements, 'HM']
  ])('createResultText', (testResult, expected) => {
    useSettingsSpy.mockImplementation(() => getMockSettingsResource(UnitSystem.Metric))
    const { result } = renderHook(() => useResultDisplay())
    const displayedText = result.current.createResultText(testResult)

    expect(displayedText).toBe(expected)
  })
})
