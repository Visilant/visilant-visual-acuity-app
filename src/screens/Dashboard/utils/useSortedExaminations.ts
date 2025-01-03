import { useExamination } from '@hooks/useExamination'
import { useMemo } from 'react'

export const sortByMobileCreatedAt = (a, b) =>
  b.mobileCreatedAt.getTime() - a.mobileCreatedAt.getTime()

export const useSortedExaminations = () => {
  const examinations = useExamination()
  const sortedExaminations = useMemo(
    () => examinations.values.sort(sortByMobileCreatedAt),
    [examinations]
  )
  return sortedExaminations
}
