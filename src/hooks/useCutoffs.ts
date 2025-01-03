import { snellenChartList } from '@shared/domain/snellen-chart'
import { useSettings } from './useSettings'
import { useMemo } from 'react'
import { useMappedSelector } from './useMappedSelector'
import { selectDeepLinkParams } from '@store/examinations'
import { DeepLinkCutoffsMapper } from '@shared/mappers/deep-link-cutoffs-mapper'

export const useCutoffs = () => {
  const { settings } = useSettings()
  const deepLinkCutoffs = useMappedSelector(
    selectDeepLinkParams,
    DeepLinkCutoffsMapper.fromStoreToDomain
  )

  const selectedCutoffs = useMemo(() => {
    if (deepLinkCutoffs !== undefined) {
      return deepLinkCutoffs
    }
    if (settings.selectedCutoffs.length === 0) {
      return snellenChartList
    } else {
      return settings.selectedCutoffs
    }
  }, [settings])

  return selectedCutoffs
}
