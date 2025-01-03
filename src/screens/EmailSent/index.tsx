import { Stack } from '@screens/stack'
import React from 'react'
import EmailSent from './EmailSent'

const Screen = () => {
  return (
    <>
      <Stack.Screen name="EmailSent" component={EmailSent} options={{ title: 'EmailSent' }} />
    </>
  )
}

export default Screen
