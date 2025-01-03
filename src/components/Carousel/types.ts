import { FunctionComponent } from 'react'
import { PagerViewProps } from 'react-native-pager-view'

export enum CarouselScrollState {
  idle = 'idle',
  dragging = 'dragging',
  settling = 'settling'
}

export interface CarouselProps {
  height?: number
  onPageChange?: (index: number) => void
  onScrollStateChanged?: (scrollState: CarouselScrollState) => void
}

export type ComponentType = FunctionComponent<PagerViewProps & CarouselProps>
