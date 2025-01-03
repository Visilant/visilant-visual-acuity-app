import { CardRow, Radio, Text, TextStyles } from '@components'
import { Container } from '@screens/Settings/styles'
import React from 'react'
import { InputProps } from '@components/types'
import { UnitSystem } from '@shared/domain/unit-system'

export const UnitSelect = (props: InputProps<UnitSystem>) => {
  const { value, onChange } = props

  return (
    <CardRow>
      <Text namespace="screens" text="settings.units" textStyle={TextStyles.Label} />
      <Container>
        <Radio
          namespace="screens"
          text="settings.metric"
          value={value === UnitSystem.Metric}
          onChange={() => onChange(UnitSystem.Metric)}
        />
        <Radio
          namespace="screens"
          text="settings.imperial"
          value={value === UnitSystem.Imperial}
          onChange={() => onChange(UnitSystem.Imperial)}
        />
      </Container>
    </CardRow>
  )
}
