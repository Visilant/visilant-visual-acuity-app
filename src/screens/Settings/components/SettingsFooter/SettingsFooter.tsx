import { Button, Footer } from '@components'
import React from 'react'
import { SettingsFooterProps } from '@screens/Settings/components/SettingsFooter/types'

export const SettingsFooter = (props: SettingsFooterProps) => {
  return (
    <Footer>
      <Button namespace="screens" text="settings.save" capitalize={true} onPress={props.onSave} />
    </Footer>
  )
}
