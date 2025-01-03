import { VoidCallback } from '@components/types'
import { MutableRefObject, useRef, useState } from 'react'

export const useRefState = <T>(initialState: T): [T, VoidCallback<T>, MutableRefObject<T>] => {
  const ref = useRef(initialState)
  const [state, setState] = useState(initialState)

  const setValue = (newValue: T) => {
    ref.current = newValue
    setState(newValue)
  }

  return [state, setValue, ref]
}
