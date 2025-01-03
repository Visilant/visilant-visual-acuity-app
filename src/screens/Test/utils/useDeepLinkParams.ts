import { useFocusEffect } from '@react-navigation/native'
import { useStackRoute } from '@screens/stack'
import { useAppDispatch } from '@store'
import { setDeepLinkParams } from '@store/examinations'
import { useCallback } from 'react'

export const useDeepLinkParams = () => {
  const dispatch = useAppDispatch()
  const { params } = useStackRoute<'Test'>()

  useFocusEffect(
    useCallback(() => {
      const { callbackId, cutoffs } = params
      if (callbackId !== undefined) {
        dispatch(setDeepLinkParams({ callbackId, cutoffs }))
      }
    }, [params])
  )
}
