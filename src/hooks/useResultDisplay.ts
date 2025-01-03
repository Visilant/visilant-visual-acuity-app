import { useSettings } from '@hooks/useSettings'
import { useResultFormatter } from './useResultFormatter'
import { EyeResult } from '@shared/domain/eyes-result'
import { isSnellenChartRatio } from '@shared/domain/snellen-chart'

export const EMPTY_CHARACTER = 'Ø'
export const useResultDisplay = () => {
  const {
    settings: { units }
  } = useSettings()
  const { format, base } = useResultFormatter(units)
  const createResultText = (result: EyeResult | undefined): string => {
    if (!result) return EMPTY_CHARACTER
    if (isSnellenChartRatio(result)) return `${base}/${format(result)}`
    return result
  }
  return {
    format,
    base,
    createResultText
  }
}
