import { act, renderHook } from '@testing-library/react-native'

import * as ReactNavigation from '@react-navigation/native'
import * as AccelerationBasedOrientation from '@hooks/useAccelerationBasedOrientation'
import { useMainTestScreenRotation } from '@screens/Test/utils/useMainTestScreenRotation'
import { ScreenState } from './screen-state'
import { EffectCallback, useEffect } from 'react'

const useAccelerationBasedOrientationSpy = jest.spyOn(
  AccelerationBasedOrientation,
  'useAccelerationBasedOrientation'
)
jest.mock('@react-navigation/native', () => {
  return {
    __esModule: true,
    ...jest.requireActual('@react-navigation/native')
  }
})
jest
  .spyOn(ReactNavigation, 'useFocusEffect')
  .mockImplementation(jest.fn((fn: EffectCallback) => useEffect(fn, [])))

describe('useMainTestScreenRotation', () => {
  beforeEach(() => {
    useAccelerationBasedOrientationSpy.mockClear()
  })

  test('landscape true', async () => {
    useAccelerationBasedOrientationSpy.mockReturnValue({ isLandscape: true })
    const { rerender, result } = await renderHook(() => useMainTestScreenRotation())

    await act(async () => {
      await rerender(undefined)
    })

    expect(result.current.screenState).toBe(ScreenState.testing)
  })

  test('landscape false', async () => {
    useAccelerationBasedOrientationSpy.mockReturnValue({ isLandscape: false })
    const { rerender, result } = await renderHook(() => useMainTestScreenRotation())

    await act(async () => {
      await rerender(undefined)
    })

    expect(result.current.screenState).toBe(ScreenState.instructions)
  })
})
