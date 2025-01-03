import { VoidCallback } from '@components/types'
import { SnellenChartItem, SnellenChartRatio } from '@shared/domain/snellen-chart'
import { UnitSystem } from '@shared/domain/unit-system'
import { FunctionComponent } from 'react'

export type CutoffSelectorItem = SnellenChartItem & { selected: boolean }

export type CutoffSelectorPanel = {
  [key in SnellenChartRatio]: CutoffSelectorItem
}
export type UseCutoffTags = (
  value: SnellenChartRatio[],
  onChange: VoidCallback<SnellenChartRatio[]>
) => {
  toggleCutoff: VoidCallback<string>
  cutoffs: CutoffSelectorPanel
}

export interface CutoffTagsProps {
  onChange: VoidCallback<SnellenChartRatio[]>
  value: SnellenChartRatio[]
  units: UnitSystem
}

export type CutoffTagsComponent = FunctionComponent<CutoffTagsProps>
