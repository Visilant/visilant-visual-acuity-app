import { CardTagRow, Tag, Text, TextStyles } from '@components'
import { useResultFormatter } from '@hooks/useResultFormatter'
import {
  sortByDecimal,
  useCutoffTags
} from '@screens/Settings/components/CutoffTags/cutoff-tags-utils'
import { CutoffTagsComponent } from '@screens/Settings/components/CutoffTags/types'
import React from 'react'

export const CutoffTags: CutoffTagsComponent = ({ value, onChange, units }) => {
  const { cutoffs, toggleCutoff } = useCutoffTags(value, onChange)
  const { format, base } = useResultFormatter(units)

  const cutoffTags = Object.entries(cutoffs)
    .sort(sortByDecimal)
    .map(([key, value]) => (
      <Tag
        key={key}
        text={`${base}/${format(value.ratio)}`}
        selected={value.selected}
        onPress={() => toggleCutoff(key)}
      />
    ))

  return (
    <>
      <CardTagRow>
        <Text namespace="screens" text="settings.cutoffs" textStyle={TextStyles.Label} />
      </CardTagRow>
      <CardTagRow>{cutoffTags}</CardTagRow>
    </>
  )
}
