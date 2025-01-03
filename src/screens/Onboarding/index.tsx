import { Stack } from '@screens/stack'
import React from 'react'
import Onboarding from './Onboarding'

const Screen = () => {
  return (
    <>
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ title: 'Onboarding' }} />
    </>
  )
}

export default Screen
