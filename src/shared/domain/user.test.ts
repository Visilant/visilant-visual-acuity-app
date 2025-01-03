import { UserInfo } from '@shared/domain/user'

const mockToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbiIsInVzZXJuYW1lIjoiTW9jayBVc2VyIiwiaWF0IjoxNjk5NTM5MjcyLCJleHAiOjE2OTk1NTM2NzJ9.t9V6yAzsETaEIC6S-njHuogEIiz1xGEeBY-2w6z3DM4'

describe('UserInfo', () => {
  test('decode from jwt', () => {
    const info = UserInfo.fromToken(mockToken)

    expect(info).toEqual({
      info: { email: 'admin', exp: 1699553672, iat: 1699539272, id: 1, username: 'Mock User' }
    })
  })

  test('default values', () => {
    const info = UserInfo.fromToken(null)

    expect(info.id).toBe('')
    expect(info.email).toBe('')
    expect(info.userName).toBe('')
  })
})
