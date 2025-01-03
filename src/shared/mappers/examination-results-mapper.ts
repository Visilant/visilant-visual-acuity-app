import { ExaminationResultsStore } from '@shared/store/examination-results-store'
import { ExaminationResults } from '@shared/domain/examination-results'
import { EyesResult } from '@shared/domain/eyes-result'

export class ExaminationResultsMapper {
  static fromDomainToStore(examinationResults: ExaminationResults): ExaminationResultsStore {
    const normal = examinationResults.normal
    const pinhole = examinationResults.pinhole
    const mobileId = examinationResults.mobileId

    return {
      mobileId,
      normal: EyesResult.copy(normal),
      pinhole: EyesResult.copy(pinhole)
    }
  }

  static fromStoreToDomain(examinationStore: ExaminationResultsStore): ExaminationResults {
    const normal = EyesResult.copy(examinationStore.normal)
    const pinhole = EyesResult.copy(examinationStore.pinhole)
    const mobileId = examinationStore.mobileId

    return new ExaminationResults(mobileId, normal, pinhole)
  }
}
