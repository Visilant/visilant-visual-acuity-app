import { DeepLinkParams } from '@store/examinations/types'
import { SnellenChartRatio } from '../domain/snellen-chart'
import { DeepLinkCutoffsMapper } from './deep-link-cutoffs-mapper'

describe.each<[DeepLinkParams | undefined, SnellenChartRatio[] | undefined]>([
  [undefined, undefined],
  [
    {
      callbackId: '',
      cutoffs: undefined
    },
    undefined
  ],
  [{ callbackId: '', cutoffs: '' }, []],
  [{ callbackId: '', cutoffs: '0.1' }, ['0.1']],
  [{ callbackId: '', cutoffs: '0.125' }, ['0.125']],
  [{ callbackId: '', cutoffs: '0.1;1.0' }, ['0.1', '1.0']]
])('Cutoffs %p, %p', (serialized, deserialized) => {
  test('serialize', () => {
    const result = DeepLinkCutoffsMapper.fromStoreToDomain(serialized)

    expect(result).toEqual(deserialized)
  })
})
