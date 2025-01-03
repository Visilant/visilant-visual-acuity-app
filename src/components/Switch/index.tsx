import DistanceSwitch1m from '@assets/svg/distance-switch-1m.svg'
import DistanceSwitch2m from '@assets/svg/distance-switch-2m.svg'
import React from 'react'
import { useTheme } from 'styled-components/native'
import { StyledPressable } from './styles'
import { DistanceSwitchComponent } from './types'
import { MeasurementDistance } from '@shared/domain/measurement-distance'

export const Switch: DistanceSwitchComponent = ({ value, onChange }) => {
  const theme = useTheme()

  const handlePress = () => {
    const newValue =
      value === MeasurementDistance.one ? MeasurementDistance.two : MeasurementDistance.one

    onChange(newValue)
  }

  return (
    <StyledPressable onPress={handlePress}>
      {value === MeasurementDistance.one ? (
        <DistanceSwitch1m fill={theme['secondary']} />
      ) : (
        <DistanceSwitch2m fill={theme['secondary']} />
      )}
    </StyledPressable>
  )
}
