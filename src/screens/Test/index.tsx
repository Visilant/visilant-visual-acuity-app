import { Stack } from '@screens/stack'
import React from 'react'
import MainTestScreen from './MainTestScreen'

const Screen = () => {
  return <Stack.Screen name="Test" component={MainTestScreen} options={{ title: 'Test' }} />
}

export default Screen
