import { act, renderHook } from '@testing-library/react-native'
import { DeviceMotion } from 'expo-sensors'
import {
  isEventLandscape,
  UPDATE_INTERVAL,
  useAccelerationBasedOrientation
} from '@hooks/useAccelerationBasedOrientation'

const setUpdateIntervalSpy = jest.spyOn(DeviceMotion, 'setUpdateInterval')

const mockRemove = jest.fn()
const addListenerSpy = jest
  .spyOn(DeviceMotion, 'addListener')
  .mockReturnValue({ remove: mockRemove })

describe('useAccelerationBasedOrientation', () => {
  beforeEach(() => {
    setUpdateIntervalSpy.mockClear()
    addListenerSpy.mockClear()
    mockRemove.mockClear()
  })

  test('mount', async () => {
    const { rerender } = await renderHook(() => useAccelerationBasedOrientation())

    await act(async () => {
      await rerender(undefined)
    })

    expect(setUpdateIntervalSpy).toHaveBeenCalledWith(UPDATE_INTERVAL)
    expect(addListenerSpy).toHaveBeenCalled()
  })

  test('unmount', async () => {
    const { unmount } = await renderHook(() => useAccelerationBasedOrientation())

    await act(async () => {
      await unmount()
    })

    expect(mockRemove).toHaveBeenCalled()
  })

  test.each([
    [-5, false],
    [-6, true]
  ])('event landscape', (value, expected) => {
    const result = isEventLandscape({ accelerationIncludingGravity: { x: value } })

    expect(result).toBe(expected)
  })
})
