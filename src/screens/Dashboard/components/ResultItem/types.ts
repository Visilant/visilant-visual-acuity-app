import { EyeResult } from '@shared/domain/eyes-result'

export interface ResultItemProps {
  sideTitle: string
  hasBorder?: boolean
  result: EyeResult | undefined
}

export interface BoxItemProps {
  hasBorder?: boolean
}
