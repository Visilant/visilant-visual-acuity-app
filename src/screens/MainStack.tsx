import { useAuth } from '@hooks/useAuth'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React from 'react'
import DashboardScreen from './Dashboard'
import InfoScreen from './Info'
import OnboardingScreen from './Onboarding'
import ResultsScreen from './Results'
import SettingsScreen from './Settings'
import TestScreen from './Test'
import { Stack } from './stack'
import LoginScreen from './Login'
import ResetPassword from './ResetPassword'
import EmailSent from './EmailSent'

const options: NativeStackNavigationOptions = {
  headerShown: false,
  orientation: 'portrait'
}

export const MainStack = () => {
  const { isUserLoggedIn } = useAuth()

  return (
    <Stack.Navigator
      initialRouteName={isUserLoggedIn ? 'Dashboard' : 'Login'}
      screenOptions={options}
    >
      {isUserLoggedIn ? (
        <>
          {DashboardScreen()}
          {SettingsScreen()}
          {InfoScreen()}
          {ResultsScreen()}
          {OnboardingScreen()}
          {TestScreen()}
        </>
      ) : (
        <>
          {LoginScreen()}
          {ResetPassword()}
          {EmailSent()}
        </>
      )}
    </Stack.Navigator>
  )
}
