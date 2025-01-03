import { Stack } from '@screens/stack'
import React from 'react'
import ResultsScreen from '@screens/Results/ResultsScreen'

const Screen = () => {
  return (
    <>
      <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'Results' }} />
    </>
  )
}

export default Screen
