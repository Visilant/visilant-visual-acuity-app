import {
  BaseDistance,
  SnellenChartDictionary,
  SnellenChartRatio
} from '@shared/domain/snellen-chart'
import { UnitSystem } from '@shared/domain/unit-system'

export const EMPTY_CHARACTER = 'Ø'
export const useResultFormatter = (units: UnitSystem) => {
  const base = BaseDistance[units].toString()
  const IsMetric = units === UnitSystem.Metric

  const format = (ratio?: SnellenChartRatio): string => {
    if (ratio === undefined) {
      return EMPTY_CHARACTER
    }

    const chartItem = SnellenChartDictionary[ratio]
    const value = IsMetric ? chartItem.metric : chartItem.imperial

    return value.toString()
  }

  return {
    format,
    base
  }
}
