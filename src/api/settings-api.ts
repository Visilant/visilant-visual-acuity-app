import { httpClient } from '@api/http-client'
import { UnitSystem } from '@shared/domain/unit-system'
import { ApiResponse } from './types'

export interface SettingsDto {
  measurement_distance: number
  units: UnitSystem
  cutoffs_selected: string
}

export type SettingsUpdateRequest = Partial<SettingsDto>

export class SettingsApi {
  static async getSettings(): Promise<ApiResponse<SettingsDto>> {
    return await httpClient.get<ApiResponse<SettingsDto>>('/settings')
  }

  static async updateSettings(body: Partial<SettingsUpdateRequest>): Promise<void> {
    return await httpClient.patch('/settings', body)
  }
}
