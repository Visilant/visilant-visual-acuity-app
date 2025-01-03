import { useResultCard } from '@screens/Dashboard/utils/useResultCard'
import { Examination } from '@shared/domain/examination'
import { renderHook } from '@testing-library/react-native'

const mockExamination = new Examination(
  'id',
  'name',
  'comment',
  new Date('2023. 08. 06. 11:02'),
  { left: '0.1', right: '0.125' },
  { left: '0.16', right: '0.2' },
  false
)
const mockFormatted = {
  date: '2023. 08. 06. 11:02',
  left: '0.1',
  leftPinhole: '0.16',
  patientName: 'name',
  right: '0.125',
  rightPinhole: '0.2'
}

describe('useResultCard', () => {
  test('format result fields', async () => {
    const { result } = await renderHook(() => useResultCard(mockExamination))

    expect(result.current).toEqual(mockFormatted)
  })
})
