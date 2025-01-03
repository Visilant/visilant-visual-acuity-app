import { Dimensions } from 'react-native'

// The total amount of horizontal margin/padding.
// TODO refactor this to match the padding in `src/views/styles.ts#ScreenStyle`
const SCREEN_HORIZONTAL_INSET = 60

export const useFullWidth = () => {
  const dimensions = Dimensions.get('window')
  return dimensions.width - SCREEN_HORIZONTAL_INSET
}
