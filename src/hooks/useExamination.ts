import { useEffect } from 'react'
import { useAppDispatch } from '@store'
import { getExaminationsThunk, selectExaminations } from '@store/examinations'
import { ExaminationListMapper } from '@shared/mappers/examination-list-mapper'
import { useMappedSelector } from '@hooks/useMappedSelector'

const useSyncExaminations = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getExaminationsThunk())
  }, [])
}

export const useExamination = () => {
  const examinations = useMappedSelector(
    selectExaminations,
    ExaminationListMapper.fromStoreToDomain
  )
  useSyncExaminations()

  return examinations
}
