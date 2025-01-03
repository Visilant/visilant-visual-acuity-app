import { ExaminationList } from '../domain/examination-list'
import { ExaminationMapper } from './examination-mapper'
import { ExaminationStore } from '@shared/store/examination-store'

export class ExaminationListMapper {
  static fromStoreToDomain(examinationsStore: ExaminationStore[]): ExaminationList {
    const examinations = examinationsStore.map(ExaminationMapper.fromStoreToDomain)
    return new ExaminationList(examinations)
  }
}
