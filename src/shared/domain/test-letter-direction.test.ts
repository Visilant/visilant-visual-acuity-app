import { LetterDirection } from './test-letter-direction'

describe('LetterDirectionUtil', () => {
  test.each([
    [0, LetterDirection.right],
    [0.3, LetterDirection.down],
    [0.6, LetterDirection.left],
    [0.9, LetterDirection.up]
  ])('getRandomDirection %p', (value, expected) => {
    jest.spyOn(global.Math, 'random').mockReturnValue(value)

    const direction = LetterDirection.getRandomDirection()

    expect(direction).toBe(expected)
  })

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })
})
