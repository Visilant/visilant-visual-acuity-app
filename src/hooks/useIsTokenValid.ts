import { AppConfig } from '@config'
import dayjs from 'dayjs'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'

const { tokenCheckInterval } = AppConfig.getConfig()

export interface JwtInfo {
  exp: number
}

const SECOND = 1000

export const isTokenValid = (token: string | null): boolean => {
  if (token === null) {
    return false
  }
  try {
    const decodedToken = jwtDecode<JwtInfo>(token, { header: false })
    const expiryTime = decodedToken.exp * SECOND
    return dayjs(expiryTime).isAfter(dayjs())
  } catch (err) {
    return false
  }
}

export const useIsTokenValid = (token: string | null) => {
  const [isValid, setIsValid] = useState(isTokenValid(token))
  useEffect(() => {
    const interval = setInterval(() => {
      setIsValid(isTokenValid(token))
    }, tokenCheckInterval)
    return () => clearInterval(interval)
  }, [setIsValid, token])
  return isValid
}
