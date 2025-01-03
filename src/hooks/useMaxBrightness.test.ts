import { act, renderHook } from '@testing-library/react-native'
import * as Brightness from 'expo-brightness'
import * as ReactNavigation from '@react-navigation/native'
import { useMaxBrightness } from '@hooks/useMaxBrightness'
import { EffectCallback, useEffect } from 'react'

const setBrightnessAsyncSpy = jest.spyOn(Brightness, 'setBrightnessAsync')
const restoreSystemBrightnessAsync = jest.spyOn(Brightness, 'restoreSystemBrightnessAsync')
jest.mock('@react-navigation/native', () => {
  return {
    __esModule: true,
    ...jest.requireActual('@react-navigation/native')
  }
})
jest
  .spyOn(ReactNavigation, 'useFocusEffect')
  .mockImplementation(jest.fn((fn: EffectCallback) => useEffect(fn, [])))

describe('useMaxBrightness', () => {
  beforeEach(() => {
    setBrightnessAsyncSpy.mockClear()
    restoreSystemBrightnessAsync.mockClear()
  })

  test('mount', async () => {
    const { rerender } = await renderHook(() => useMaxBrightness())

    await act(async () => {
      await rerender(undefined)
    })

    expect(restoreSystemBrightnessAsync).not.toHaveBeenCalled()
    expect(setBrightnessAsyncSpy).toHaveBeenCalledWith(1)
  })

  test('unmount', async () => {
    const { unmount } = await renderHook(() => useMaxBrightness())

    setBrightnessAsyncSpy.mockClear()
    restoreSystemBrightnessAsync.mockClear()

    await act(async () => {
      await unmount()
    })

    expect(setBrightnessAsyncSpy).not.toHaveBeenCalled()
    expect(restoreSystemBrightnessAsync).toHaveBeenCalled()
  })
})
