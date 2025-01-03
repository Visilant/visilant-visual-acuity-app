import { createCutoffs } from '@screens/Settings/components/CutoffTags/cutoff-tags-utils'
import { SnellenChartRatio } from '@shared/domain/snellen-chart'

test('createCutoffs', () => {
  const testValue: SnellenChartRatio[] = ['0.1', '1.0', '0.25']

  const result = createCutoffs(testValue)
  expect(result).toMatchSnapshot()
})
