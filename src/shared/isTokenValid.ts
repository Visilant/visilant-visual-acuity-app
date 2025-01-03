import dayjs from 'dayjs'
import jwtDecode from 'jwt-decode'

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
