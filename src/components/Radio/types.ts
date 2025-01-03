import { InputProps, TextProps } from '@components/types'
import { FunctionComponent } from 'react'

export interface StyleProps {
  selected: boolean
}

export type RadioButtonComponent = FunctionComponent<TextProps & InputProps<boolean>>
