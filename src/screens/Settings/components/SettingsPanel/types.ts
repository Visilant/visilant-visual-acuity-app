import { UserSettings } from '@shared/domain/settings'

export interface SettingsPanelProps {
  data: UserSettings
  header: JSX.Element

  onSave: (update: UserSettings) => void
}
