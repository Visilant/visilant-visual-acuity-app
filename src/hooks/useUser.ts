import { useMemo } from 'react'
import { useAppSelector } from '@store'
import { selectToken } from '@store/auth/authSlice'
import { UserInfo } from '@shared/domain/user'

export const useUser = () => {
  const token = useAppSelector(selectToken)

  const info = useMemo(() => {
    return UserInfo.fromToken(token)
  }, [token])

  return info
}
