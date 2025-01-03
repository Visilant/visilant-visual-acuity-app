import { useStackRoute } from '@screens/stack'
import { useCallback, useState } from 'react'
import { ExaminationType } from '@shared/domain/examination-type'
import { useFocusEffect } from '@react-navigation/native'

export const useActiveTestParam = () => {
  const { params } = useStackRoute<'Test'>()

  const [activeTest, setActiveTest] = useState<ExaminationType | null | undefined>(null)

  useFocusEffect(
    useCallback(() => {
      setActiveTest(params.activeTest)
    }, [params.activeTest])
  )

  return activeTest
}
