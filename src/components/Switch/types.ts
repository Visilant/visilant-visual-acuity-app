import { InputProps } from '@components/types'
import { FunctionComponent } from 'react'
import { MeasurementDistance } from '@shared/domain/measurement-distance'

export type DistanceSwitchComponent = FunctionComponent<InputProps<MeasurementDistance>>
