import { EMPTY_CHARACTER } from '@hooks/useResultDisplay'
import { SnellenChartDictionary } from '@shared/domain/snellen-chart'
import { UnitSystem } from '@shared/domain/unit-system'
import { renderHook } from '@testing-library/react-native'
import { useResultFormatter } from './useResultFormatter'

describe('useResultFormatter', () => {
  test.each([
    [UnitSystem.Metric, '6'],
    [UnitSystem.Imperial, '20']
  ])('base', (units, expected) => {
    const { result } = renderHook(() => useResultFormatter(units))

    expect(result.current.base).toBe(expected)
  })

  test('format Metric', () => {
    const { result } = renderHook(() => useResultFormatter(UnitSystem.Metric))
    const ratio = '0.1'

    const expected = SnellenChartDictionary[ratio].metric.toString()
    const value = result.current.format(ratio)

    expect(value).toBe(expected)
  })

  test('format Imperial', () => {
    const { result } = renderHook(() => useResultFormatter(UnitSystem.Imperial))
    const ratio = '0.1'

    const expected = SnellenChartDictionary[ratio].imperial.toString()
    const value = result.current.format(ratio)

    expect(value).toBe(expected)
  })

  test('format undefined', () => {
    const { result } = renderHook(() => useResultFormatter(UnitSystem.Metric))

    const value = result.current.format(undefined)

    expect(value).toBe(EMPTY_CHARACTER)
  })
})
