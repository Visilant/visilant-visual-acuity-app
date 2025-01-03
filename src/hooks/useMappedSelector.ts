import { RootState, useAppSelector } from '@store'
import { useMemo } from 'react'

export function useMappedSelector<T, K>(
  selector: (state: RootState) => T,
  mapper: (value: T) => K
) {
  const data = useAppSelector(selector)

  return useMemo(() => mapper(data), [data])
}
