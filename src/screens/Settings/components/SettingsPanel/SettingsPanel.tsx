import { Body, Card, SafeView } from '@components'
import { CutoffTags } from '@screens/Settings/components/CutoffTags'
import { DistanceSelect } from '@screens/Settings/components/DistanceSelect'
import { SettingsFooter } from '@screens/Settings/components/SettingsFooter'
import { SettingsPanelProps } from '@screens/Settings/components/SettingsPanel/types'
import { UnitSelect } from '@screens/Settings/components/UnitSelect'
import { UserSettings } from '@shared/domain/settings'
import { UnitSystem } from '@shared/domain/unit-system'
import React, { useState } from 'react'

export const SettingsPanel = ({ data, header, onSave }: SettingsPanelProps) => {
  const [distance, setDistance] = useState(data.measurementDistance)
  const [units, setUnitSystem] = useState<UnitSystem>(data.units)
  const [selectedCutoffs, setSelectedCutoffs] = useState(data.selectedCutoffs)

  const handleSave = () => {
    const updatedSettings = new UserSettings(selectedCutoffs, distance, units)

    onSave(updatedSettings)
  }

  return (
    <>
      <SafeView>
        {header}
        <Body>
          <Card>
            <DistanceSelect value={distance} onChange={setDistance} />
            <UnitSelect value={units} onChange={setUnitSystem} />
          </Card>
          <Card style={{ gap: 15 }}>
            <CutoffTags value={selectedCutoffs} onChange={setSelectedCutoffs} units={units} />
          </Card>
        </Body>
      </SafeView>
      <SettingsFooter onSave={handleSave} />
    </>
  )
}
