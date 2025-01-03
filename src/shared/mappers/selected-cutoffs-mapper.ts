import { SnellenChartRatio } from '../domain/snellen-chart'

const SEPARATOR = ';'

export class SelectedCutoffsMapper {
  static deserialize(value: string): SnellenChartRatio[] {
    const result = SelectedCutoffsMapper.parseString(value)

    return result as SnellenChartRatio[]
  }

  static serialize(value: SnellenChartRatio[]): string {
    const result = value.join(SEPARATOR)

    return result
  }

  static parseString(value: string): string[] {
    return value
      .split(SEPARATOR)
      .filter(item => item !== '')
      .map(item => item.trim())
      .filter(item => !isNaN(parseFloat(item)))
  }
}
