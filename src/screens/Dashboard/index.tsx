import { Stack } from '@screens/stack'
import React from 'react'
import DashboardScreen from '@screens/Dashboard/DashboardScreen'

const Screen = () => {
  return (
    <>
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
    </>
  )
}

export default Screen
