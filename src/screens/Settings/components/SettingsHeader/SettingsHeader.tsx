import { Header, Icon, IconsEnum, Text, TextStyles } from '@components'
import React from 'react'
import { SettingsHeaderProps } from '@screens/Settings/components/SettingsHeader/types'

export const SettingsHeader = (props: SettingsHeaderProps) => {
  return (
    <Header>
      <Text namespace="screens" text="settings.title" textStyle={TextStyles.Title} />
      <Icon icon={IconsEnum.close} action={props.onClose} />
    </Header>
  )
}
