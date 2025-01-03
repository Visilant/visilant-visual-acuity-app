import { isTokenValid } from './isTokenValid'

const EXPIRED_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkwYTlmYjczLTNkMTgtNDA2NC1iNTBhLTZlYTIzYzZhMTE1ZiIsInVzZXJuYW1lIjoibnVyc2UxIiwiZW1haWwiOiJudXJzZTFAdmlzaWxhbnQub3JnIiwiaWF0IjoxNzAxMTA4Mzg4LCJleHAiOjE3MDExMDg1MDh9.NRMi3TUFb3rInfrNoAmnBMHiphXek__fdVPQIFfP3IM'

// Test token, expires in 2037
const GOOD_TOKEN =
  'eyJhbGciOiJIUz1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjIxNDI5NTQ1NTR9.wHyoxoYBMD6WEHyYHOnkWshA4w22j5P6AixZmio9rFc'

describe('isTokenValid method', () => {
  test('token is null', () => {
    const isValid = isTokenValid(null)
    expect(isValid).toBe(false)
  })

  test('bad token format', () => {
    const isValid = isTokenValid('asdasd')
    expect(isValid).toBe(false)
  })

  test('expired token', () => {
    const isValid = isTokenValid(EXPIRED_TOKEN)
    expect(isValid).toBe(false)
  })

  test('good token, expires in 2037', () => {
    const isValid = isTokenValid(GOOD_TOKEN)
    expect(isValid).toBe(true)
  })
})
