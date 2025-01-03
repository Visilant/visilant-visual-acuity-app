import { Examination } from '@shared/domain/examination'

export interface ResultCardProps {
  examination: Examination
  onPress: VoidFunction
}

export interface ResultIconContainerProps {
  opacity?: boolean
}
