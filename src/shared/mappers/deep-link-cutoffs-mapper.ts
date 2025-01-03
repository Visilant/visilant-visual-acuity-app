import { SnellenChartRatio } from '@shared/domain/snellen-chart'
import { DeepLinkParams } from '@store/examinations/types'
import { SelectedCutoffsMapper } from './selected-cutoffs-mapper'

export class DeepLinkCutoffsMapper {
  static fromStoreToDomain(params: DeepLinkParams | undefined): SnellenChartRatio[] | undefined {
    if (params?.cutoffs === undefined) {
      return undefined
    }
    const decodedCutoffs = decodeURIComponent(params.cutoffs)
    const selectedCutoffs = SelectedCutoffsMapper.deserialize(decodedCutoffs)
    return selectedCutoffs
  }
}
