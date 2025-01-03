import { CreateExaminationDto, ExaminationDto } from '@api/examination-api'
import { Examination } from '../domain/examination'
import { EyesResult } from '../domain/eyes-result'
import { ExaminationStore } from '@shared/store/examination-store'

export const SEPARATOR = ';'
export const NO_RESULT = 'NULL'

export class ExaminationMapper {
  static fromDtoToStore(examination: ExaminationDto): ExaminationStore {
    const normal = EyesResult.create(examination.left, examination.right)
    const pinhole = EyesResult.create(examination.leftPinhole, examination.rightPinhole)

    return {
      mobileId: examination.mobileId,
      patientName: examination.patient_name,
      comment: examination.comment,
      mobileCreatedAt: examination.mobileCreatedAt,
      isSynced: true,
      normal,
      pinhole
    }
  }

  static fromDomainToSerializedResults(examination: Examination): string {
    return [
      examination.normal?.left ?? NO_RESULT,
      examination.normal?.right ?? NO_RESULT,
      examination.pinhole?.left ?? NO_RESULT,
      examination.pinhole?.right ?? NO_RESULT
    ].join(SEPARATOR)
  }

  static fromDomainToStore(examination: Examination): ExaminationStore {
    return {
      mobileId: examination.mobileId,
      patientName: examination.patientName,
      comment: examination.comment,
      normal: EyesResult.copy(examination.normal),
      pinhole: EyesResult.copy(examination.pinhole),
      mobileCreatedAt: examination.mobileCreatedAt.toISOString(),
      isSynced: examination.isSynced
    }
  }

  static fromStoreToDomain(examination: ExaminationStore): Examination {
    return new Examination(
      examination.mobileId,
      examination.patientName ?? '',
      examination.comment ?? '',
      new Date(examination.mobileCreatedAt),
      examination.normal,
      examination.pinhole,
      examination.isSynced
    )
  }

  static fromStoreToCreateDto(examination: ExaminationStore): CreateExaminationDto {
    return {
      mobileId: examination.mobileId,
      patient_name: examination.patientName ?? '',
      comment: examination.comment ?? '',
      mobileCreatedAt: examination.mobileCreatedAt,
      left: examination.normal?.left,
      right: examination.normal?.right,
      leftPinhole: examination.pinhole?.left,
      rightPinhole: examination.pinhole?.right
    }
  }
}
