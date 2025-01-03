import { SnellenChartRatio } from './snellen-chart'
import { UnitSystem } from './unit-system'

export class UserSettings {
  private _selectedCutoffs: SnellenChartRatio[]
  private _measurementDistance: number
  private _units: UnitSystem
  constructor(
    _selectedCutoffs: SnellenChartRatio[] | undefined,
    _measurementDistance: number | undefined,
    _units: UnitSystem | undefined
  ) {
    this._selectedCutoffs = _selectedCutoffs ?? []
    this._measurementDistance = _measurementDistance ?? 2
    this._units = _units ?? UnitSystem.Metric
  }

  get hasTests() {
    return this.selectedCutoffs.length > 0
  }

  get selectedCutoffs(): SnellenChartRatio[] {
    return this._selectedCutoffs
  }

  get measurementDistance(): number {
    return this._measurementDistance
  }

  get units(): UnitSystem {
    return this._units
  }
}
