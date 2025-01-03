import React from 'react'
import { CardRow, Switch, Text, TextStyles } from '@components'
import { InputProps } from '@components/types'
import { MeasurementDistance } from '@shared/domain/measurement-distance'

export const DistanceSelect = (props: InputProps<MeasurementDistance>) => {
  const { value, onChange } = props

  const handleChange = () => {
    const newValue =
      value === MeasurementDistance.one ? MeasurementDistance.two : MeasurementDistance.one
    onChange(newValue)
  }

  return (
    <CardRow>
      <Text namespace="screens" text="settings.distance" textStyle={TextStyles.Label} />
      <Switch value={value} onChange={handleChange} />
    </CardRow>
  )
}
