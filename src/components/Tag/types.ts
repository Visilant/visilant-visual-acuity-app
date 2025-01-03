import { FunctionComponent } from 'react'

export interface TagProps {
  text: string
  selected: boolean
  onPress: () => void
}

export type TagComponent = FunctionComponent<TagProps>
