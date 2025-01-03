import { SnellenChartRatio } from '../domain/snellen-chart'
import { SelectedCutoffsMapper } from './selected-cutoffs-mapper'

test.each([
  ['', []],
  [';', []],
  [';;;;;', []],
  ['1.0', ['1.0']],
  ['1.0;2.5;3.3', ['1.0', '2.5', '3.3']],
  ['1.0    ; 2.5;  3.3', ['1.0', '2.5', '3.3']],
  ['text333', []]
])('parseString %p, %p', (value, expected) => {
  const result = SelectedCutoffsMapper.parseString(value)
  expect(result).toEqual(expected)
})

describe.each<[string, SnellenChartRatio[]]>([
  ['', []],
  ['0.1', ['0.1']],
  ['0.125', ['0.125']],
  ['0.1;1.0', ['0.1', '1.0']]
])('Cutoffs %p, %p', (serialized, deserialized) => {
  test('serialize', () => {
    const result = SelectedCutoffsMapper.serialize(deserialized)

    expect(result).toEqual(serialized)
  })

  test('deserialize', () => {
    const result = SelectedCutoffsMapper.deserialize(serialized)

    expect(result).toEqual(deserialized)
  })
})
