import { Stack } from '@screens/stack'
import React from 'react'
import SettingsScreen from '@screens/Settings/SettingsScreen'

const Screen = () => {
  return (
    <>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </>
  )
}

export default Screen
