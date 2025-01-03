import { ExaminationResults } from '@shared/domain/examination-results'
import { ExaminationType } from '@shared/domain/examination-type'
import { EyeResult } from '@shared/domain/eyes-result'
import { useRefState } from '@hooks/useRefState'
import { useAppDispatch, useAppSelector } from '@store'
import {
  clearActiveResults,
  selectActiveExamination,
  setActiveExamination
} from '@store/examinations'
import { ExaminationResultsMapper } from '@shared/mappers/examination-results-mapper'

const initialResult = new ExaminationResults()

export const useResults = () => {
  const active = useAppSelector(selectActiveExamination)
  const initial = active ? ExaminationResultsMapper.fromStoreToDomain(active) : initialResult
  const dispatch = useAppDispatch()

  const [state, setState, ref] = useRefState(initial)

  const setResult = (type: ExaminationType, value: EyeResult | undefined) => {
    const updated = state.copy()
    updated.setSnellen(type, value)

    setState(updated)
  }

  const clear = () => {
    dispatch(clearActiveResults())
  }

  const save = () => {
    dispatch(setActiveExamination(ref.current))
  }

  return { results: state, setResult, clear, save }
}
