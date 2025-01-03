import { Stack } from '@screens/stack'
import React from 'react'
import Info from './Info'

const Screen = () => {
  return (
    <>
      <Stack.Screen name="Info" component={Info} options={{ title: 'Info' }} />
    </>
  )
}

export default Screen
