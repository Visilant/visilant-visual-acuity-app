import { LetterDirection } from '@shared/domain/test-letter-direction'
import { TestLetterRender } from '@shared/test-letter-render'

describe('LetterRenderUtil', () => {
  test.each([
    [[1, 1], 21.988415529883156],
    [[1, 2], 43.97683105976631],
    [[2, 1], 10.994207764941578],
    [[2, 2], 21.988415529883156]
  ])('calculateLetterSize %p', ([ratio, distance], expected) => {
    const result = TestLetterRender.calculateLetterSize(ratio, distance)

    expect(result).toBe(expected)
  })

  test.each([
    [LetterDirection.right, 0],
    [LetterDirection.down, 90],
    [LetterDirection.left, 180],
    [LetterDirection.up, 270]
  ])('calculateRotation %p', (value, expected) => {
    const result = TestLetterRender.calculateRotation(value)

    expect(result).toBe(expected)
  })

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })
})
