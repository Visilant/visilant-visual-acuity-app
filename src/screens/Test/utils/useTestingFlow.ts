import { useActiveTestParam } from '@screens/Test/utils/useActiveTestParam'
import { useEffect, useState } from 'react'
import { ExaminationType } from '@shared/domain/examination-type'
import { useResults } from '@screens/Test/utils/useResults'
import { EyeResult } from '@shared/domain/eyes-result'
import { ExaminationResults } from '@shared/domain/examination-results'

export interface Flow {
  activeType: ExaminationType | undefined
  start: (type: ExaminationType) => void
  handleFinish: () => void
  handleResult: (testResult: EyeResult) => void
  results: ExaminationResults
}

export const useTestingFlow = ({ onFinish }: { onFinish: VoidFunction }): Flow => {
  const singleExamination = useActiveTestParam()
  const [activeType, setActiveType] = useState<ExaminationType | undefined>(
    singleExamination ?? undefined
  )
  const results = useResults()

  useEffect(() => {
    if (singleExamination !== null) {
      setActiveType(singleExamination)
    }
  }, [singleExamination])

  useEffect(() => {
    if (singleExamination === undefined) {
      results.clear()
    }
  }, [singleExamination])

  const start = (type: ExaminationType) => {
    setActiveType(type)
  }

  const handleFinish = () => {
    results.save()

    onFinish()
  }

  const handleResult = (testResult: EyeResult) => {
    if (!activeType) {
      return
    }
    results.setResult(activeType, testResult)
    setActiveType(undefined)

    if (singleExamination) {
      handleFinish()
    }
  }

  return { activeType, start, handleFinish, handleResult, results: results.results }
}
