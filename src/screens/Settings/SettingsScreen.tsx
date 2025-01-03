import { Screen } from '@components'
import React from 'react'
import { RootStackScreenProps } from '@screens/stack'
import { SettingsHeader } from '@screens/Settings/components/SettingsHeader'
import { SettingsLoading } from '@screens/Settings/components/SettingsLoading'
import { SettingsPanel } from '@screens/Settings/components/SettingsPanel'
import { useSettings } from '@hooks/useSettings'
import { UserSettings } from '@shared/domain/settings'
import { withErrorBoundary } from '@hocs/withErrorBoundary'

const SettingsScreen = ({ navigation }: RootStackScreenProps<'Settings'>) => {
  const { updateSettings, settings } = useSettings()

  const handleClose = () => {
    navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Dashboard')
  }

  const handleSave = async (update: UserSettings) => {
    await updateSettings(update)
    navigation.navigate('Dashboard')
  }

  const header = <SettingsHeader onClose={handleClose} />

  return (
    <Screen>
      {settings ? (
        <SettingsPanel data={settings} header={header} onSave={handleSave} />
      ) : (
        <SettingsLoading header={header} />
      )}
    </Screen>
  )
}

export default withErrorBoundary(SettingsScreen)
