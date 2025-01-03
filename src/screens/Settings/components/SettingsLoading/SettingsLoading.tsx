import { Body, SafeView, Text } from '@components'
import React from 'react'
import { SettingsLoadingProps } from '@screens/Settings/components/SettingsLoading/types'

export const SettingsLoading = ({ header }: SettingsLoadingProps) => (
  <SafeView>
    {header}

    <Body>
      <Text>Loading</Text>
    </Body>
  </SafeView>
)
