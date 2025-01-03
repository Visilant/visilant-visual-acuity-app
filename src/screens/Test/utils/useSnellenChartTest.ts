import { useCallback, useMemo, useState } from 'react'
import { SnellenChartTest } from '@shared/domain/snellen-test'
import { LetterDirection } from '@shared/domain/test-letter-direction'
import { useCutoffs } from '@hooks/useCutoffs'

export const useSnellenChartTest = () => {
  const selectedCutoffs = useCutoffs()
  const test = useMemo(() => new SnellenChartTest([...selectedCutoffs]), [])

  const [cutoff, setCutoff] = useState(test.cutoff)
  const [direction, setDirection] = useState(test.direction)
  const [isFinished, setIsFinished] = useState(test.isFinished)
  const [answer, setAnswer] = useState(test.answer)

  const handleAction = useCallback(
    (answer: LetterDirection) => {
      test.checkResult(answer)

      setCutoff(test.cutoff)
      setDirection(test.direction)
      setIsFinished(test.isFinished)
      setAnswer(test.answer)
    },
    [test]
  )

  const actions = {
    down: () => handleAction(LetterDirection.down),
    up: () => handleAction(LetterDirection.up),
    left: () => handleAction(LetterDirection.left),
    right: () => handleAction(LetterDirection.right)
  }

  return { actions, direction, cutoff, isFinished, answer }
}
