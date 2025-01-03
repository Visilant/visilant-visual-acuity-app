import { SnellenChartRatio } from './snellen-chart'
import { ManualTestResult } from '@shared/domain/manual-test-result'

export type EyeResult = SnellenChartRatio | ManualTestResult

export interface EyesResult {
  left?: EyeResult
  right?: EyeResult
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace EyesResult {
  export const create = (
    left: EyeResult | undefined,
    right: EyeResult | undefined
  ): EyesResult => ({ left, right })

  export const copy = (prev: EyesResult | undefined): EyesResult | undefined => {
    return prev ? { left: prev.left, right: prev.right } : undefined
  }

  export const withLeft = (
    prev: EyesResult | undefined,
    value: EyeResult | undefined
  ): EyesResult | undefined => {
    return create(value, prev?.right)
  }

  export const withRight = (
    prev: EyesResult | undefined,
    value: EyeResult | undefined
  ): EyesResult | undefined => {
    return create(prev?.left, value)
  }
}
