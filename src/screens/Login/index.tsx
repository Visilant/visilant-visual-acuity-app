import { Stack } from '@screens/stack'
import React from 'react'
import Login from './Login'

const Screen = () => {
  return (
    <>
      <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
    </>
  )
}

export default Screen
