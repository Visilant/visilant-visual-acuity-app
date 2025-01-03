import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { SettingsSliceState } from '@store/settings/types'
import { ApiResponse } from '@api'
import { SettingsDto } from '@api/settings-api'
import { UserSettingsMapper } from '@shared/mappers/settings-mapper'
import { SettingsStore } from '@shared/store/settings-store'

export class GetSettingsFulfilledHandler {
  constructor(
    private state: Draft<SettingsSliceState>,
    private action: PayloadAction<ApiResponse<SettingsDto>>
  ) {}

  process() {
    this.state.userSettings = this.mapSettings(this.updates)
  }

  mapSettings(settings: SettingsDto): SettingsStore {
    return UserSettingsMapper.fromDtoToStore(settings)
  }

  get updates() {
    return this.action.payload.data
  }
}
