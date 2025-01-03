import { EyeResult } from '@shared/domain/eyes-result'
import { ExaminationType } from '@shared/domain/examination-type'

export interface ResultCardSideProps {
  result?: EyeResult
  text: string
  type: ExaminationType
  side: string
}
