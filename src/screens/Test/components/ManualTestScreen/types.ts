import { FunctionComponent } from 'react'
import { VoidCallback } from '@components/types'

export type ManualTestScreenComponent = FunctionComponent<{
  title: string
  onPress: VoidCallback<boolean>
}>
