import { renderHook } from '@testing-library/react-native'
import { useTranslatedOrRaw } from '@hooks/useTranslatedOrRaw'

const mockData = {
  value: 'translation.key',
  translatedValue: 'Translated Value',
  namespace: 'mock'
}

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => mockData.translatedValue })
}))

describe('useTranslatedOrRaw', () => {
  test('handle undefined', async () => {
    const { result } = await renderHook(() => useTranslatedOrRaw(undefined, undefined, true))

    expect(result.current).toBe('')
  })

  test('raw text', async () => {
    const { result } = await renderHook(() =>
      useTranslatedOrRaw(mockData.value, mockData.namespace, true)
    )

    expect(result.current).toBe(mockData.value)
  })

  test('translated text', async () => {
    const { result } = await renderHook(() =>
      useTranslatedOrRaw(mockData.value, mockData.namespace, false)
    )

    expect(result.current).toBe(mockData.translatedValue)
  })
})
