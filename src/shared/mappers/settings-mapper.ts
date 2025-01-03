import { SettingsDto, SettingsUpdateRequest } from '@api'
import { UserSettings } from '../domain/settings'
import { SelectedCutoffsMapper } from './selected-cutoffs-mapper'
import { SettingsStore } from '@shared/store/settings-store'

export class UserSettingsMapper {
  static fromDto(settingsDto: SettingsDto): UserSettings {
    const selectedCutoffs = SelectedCutoffsMapper.deserialize(settingsDto.cutoffs_selected)
    const measurementDistance = settingsDto.measurement_distance
    const units = settingsDto.units

    return new UserSettings(selectedCutoffs, measurementDistance, units)
  }

  static fromDtoToStore(settingsDto: SettingsDto): SettingsStore {
    const selectedCutoffs = SelectedCutoffsMapper.deserialize(settingsDto.cutoffs_selected)
    const measurementDistance = settingsDto.measurement_distance
    const units = settingsDto.units

    return {
      selectedCutoffs,
      measurementDistance,
      units
    }
  }

  static fromStoreToDomain(settingsStore?: SettingsStore): UserSettings {
    const selectedCutoffs = settingsStore?.selectedCutoffs
    const measurementDistance = settingsStore?.measurementDistance
    const units = settingsStore?.units

    return new UserSettings(selectedCutoffs, measurementDistance, units)
  }

  static toUpdateRequest(settings: UserSettings): SettingsUpdateRequest {
    const cutoffs_selected = SelectedCutoffsMapper.serialize(settings.selectedCutoffs)
    const measurement_distance = settings.measurementDistance
    const units = settings.units

    return {
      cutoffs_selected,
      measurement_distance,
      units
    }
  }
}
