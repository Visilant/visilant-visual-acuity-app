import { useWindowDimensions } from 'react-native'

export enum ScreenSize {
  small,
  medium
}

export interface Breakpoint {
  size: ScreenSize
  breakpoint: number
}

export const Breakpoints: Record<ScreenSize, Breakpoint> = {
  [ScreenSize.small]: {
    size: ScreenSize.small,
    breakpoint: 389
  },
  [ScreenSize.medium]: {
    size: ScreenSize.medium,
    breakpoint: 10000
  }
}

export const useScreenSize = () => {
  const { width } = useWindowDimensions()

  return Object.values(Breakpoints)
    .filter(val => width <= val.breakpoint)
    .toSorted((a, b) => a.size - b.size)[0]
}
