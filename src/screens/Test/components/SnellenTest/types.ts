import { FunctionComponent } from 'react'
import { SnellenChartRatio } from '@shared/domain/snellen-chart'

export interface SnellenTestProps {
  onFinish: (result: SnellenChartRatio | undefined) => void
}

export interface SnellenTestViewProps {
  measurementDistance: number
}

export type SnellenTestComponent = FunctionComponent<SnellenTestProps>

export type SnellenTestViewComponent = FunctionComponent<SnellenTestViewProps>
