import { SnellenChartDictionary, snellenChartList } from '@shared/domain/snellen-chart'
import { SnellenChartTest } from '@shared/domain/snellen-test'
import { LetterDirection } from '@shared/domain/test-letter-direction'

const getRandomDirectionSpy = jest.spyOn(LetterDirection, 'getRandomDirection')

describe('SnellenChartTest', () => {
  beforeEach(() => {
    getRandomDirectionSpy.mockClear()
  })

  test('go through test: wrong, right, right', () => {
    getRandomDirectionSpy.mockReturnValue(LetterDirection.right)
    const test = new SnellenChartTest(snellenChartList)

    expect(test.displayCounter).toBe(0)
    expect(test.direction).toBe(LetterDirection.right)
    expect(test.isFinished).toBe(false)
    expect(test.cutoff).toEqual(SnellenChartDictionary['0.1'])

    test.checkResult(LetterDirection.left)
    expect(test.displayCounter).toBe(0)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(0)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(1)

    expect(test.isFinished).toBe(false)
    expect(test.cutoff).toEqual(SnellenChartDictionary['0.125'])
    expect(test.answer).toEqual(SnellenChartDictionary['0.1'])
  })

  test('go through test: right, wrong, right, right', () => {
    getRandomDirectionSpy.mockReturnValue(LetterDirection.right)
    const test = new SnellenChartTest(snellenChartList)

    expect(test.displayCounter).toBe(0)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(1)
    test.checkResult(LetterDirection.left)
    expect(test.displayCounter).toBe(1)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(1)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(2)

    expect(test.isFinished).toBe(false)
    expect(test.cutoff).toEqual(SnellenChartDictionary['0.16'])
    expect(test.answer).toEqual(SnellenChartDictionary['0.125'])
  })

  test('go through test: bad, bad', () => {
    getRandomDirectionSpy.mockReturnValue(LetterDirection.right)
    const test = new SnellenChartTest(snellenChartList)

    expect(test.displayCounter).toBe(0)
    test.checkResult(LetterDirection.down)
    expect(test.displayCounter).toBe(0)
    test.checkResult(LetterDirection.up)
    expect(test.displayCounter).toBe(0)

    expect(test.isFinished).toBe(true)
    expect(test.cutoff).toEqual(SnellenChartDictionary['0.1'])
    expect(test.answer).toBeUndefined()
  })

  test('go through test: 2nd phase', () => {
    getRandomDirectionSpy.mockReturnValue(LetterDirection.right)
    const test = new SnellenChartTest(snellenChartList)

    expect(test.displayCounter).toBe(0)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(1)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(2)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(3)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(4)
    expect(test.isFirstPhase).toBe(true)

    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(5)
    expect(test.isFirstPhase).toBe(false)

    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(5)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(6)

    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(6)
    test.checkResult(LetterDirection.left)
    expect(test.displayCounter).toBe(6)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(7)

    test.checkResult(LetterDirection.left)
    expect(test.displayCounter).toBe(7)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(7)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(8)

    test.checkResult(LetterDirection.left)
    expect(test.displayCounter).toBe(8)
    test.checkResult(LetterDirection.right)
    expect(test.displayCounter).toBe(8)
    test.checkResult(LetterDirection.left)
    expect(test.displayCounter).toBe(8)

    expect(test.isFinished).toBe(true)
    expect(test.cutoff).toEqual(SnellenChartDictionary['0.67'])
    expect(test.answer).toEqual(SnellenChartDictionary['0.5'])
  })
})
