import { SnellenChartDictionary, SnellenChartRatio } from '@shared/domain/snellen-chart'
import {
  CutoffSelectorItem,
  CutoffSelectorPanel,
  UseCutoffTags
} from '@screens/Settings/components/CutoffTags/types'
import { useMemo } from 'react'

export const sortByDecimal = (a: [string, CutoffSelectorItem], b: [string, CutoffSelectorItem]) =>
  b[1].decimal - a[1].decimal

export const createCutoffs = (selectedCutoffs: SnellenChartRatio[]): CutoffSelectorPanel => {
  const result = { ...SnellenChartDictionary }

  for (const key in result) {
    const item = result[key]

    const snellenKey = key as SnellenChartRatio
    const selected = selectedCutoffs.includes(snellenKey)

    item.selected = selected
  }

  return result as CutoffSelectorPanel
}

export const useCutoffTags: UseCutoffTags = (value, onChange) => {
  const toggleCutoff = (key: string) => {
    const target = key as SnellenChartRatio

    let newValue: SnellenChartRatio[]

    if (value.includes(target)) {
      newValue = value.filter(item => item !== target)
    } else {
      newValue = [...value, target]
    }

    onChange(newValue)
  }

  const cutoffs = useMemo(() => createCutoffs(value), [value])

  return { cutoffs, toggleCutoff }
}
