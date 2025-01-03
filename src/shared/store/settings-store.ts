import { SnellenChartRatio } from '@shared/domain/snellen-chart'
import { UnitSystem } from '@shared/domain/unit-system'

export interface SettingsStore {
  selectedCutoffs: SnellenChartRatio[]
  measurementDistance: number
  units: UnitSystem
}
