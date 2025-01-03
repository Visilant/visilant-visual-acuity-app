import { Examination } from '@shared/domain/examination'
import dayjs from 'dayjs'

export const useResultCard = (examination: Examination) => {
  return {
    patientName: examination.patientName,
    date: dayjs(examination.mobileCreatedAt).format('YYYY. MM. DD. HH:mm'),
    right: examination.normal?.right,
    left: examination.normal?.left,
    rightPinhole: examination.pinhole?.right,
    leftPinhole: examination.pinhole?.left
  }
}
