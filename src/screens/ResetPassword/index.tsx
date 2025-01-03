import { Stack } from '@screens/stack'
import React from 'react'
import ResetPassword from './ResetPassword'

const Screen = () => {
  return (
    <>
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ title: 'ResetPassword' }}
      />
    </>
  )
}

export default Screen
