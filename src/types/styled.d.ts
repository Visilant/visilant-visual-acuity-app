import {} from 'styled-components'
import { ThemeType } from '@components/theme/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
