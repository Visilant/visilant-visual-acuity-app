import { SettingsStore } from '@shared/store/settings-store'

export interface SettingsSliceState {
  locale: string
  showDashboardInstructions: boolean
  userSettings?: SettingsStore
}
