import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { ExaminationType } from '@shared/domain/examination-type'

export type TestParamList = {
  activeTest?: ExaminationType
  callbackId?: string
  cutoffs?: string
}

export type RootStackParamList = {
  Info: undefined
  Login: undefined
  ResetPassword: undefined
  EmailSent: undefined
  Settings: undefined
  Dashboard: undefined
  Intro: undefined
  Onboarding: undefined
  Results: undefined
  TestNavigation: undefined
  Test: TestParamList
  OrientationModal: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>

export const useStackNavigation = () => useNavigation<NavigationProp<RootStackParamList>>()
export const useStackRoute = <T extends keyof RootStackParamList>() =>
  useRoute<RouteProp<RootStackParamList, T>>()

export const Stack = createNativeStackNavigator<RootStackParamList>()
