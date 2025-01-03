import { renderHook } from '@testing-library/react-native'
import { UPDATE_INTERVAL_MILLISEC, useScheduler } from '@hooks/useScheduler'

jest.useFakeTimers()
const intervalSpy = jest.spyOn(global, 'setInterval')
jest.spyOn(global, 'clearInterval')

describe('useScheduler', () => {
  test('start timer', () => {
    const callback = jest.fn()

    const hook = renderHook(() => useScheduler(callback))

    hook.result.current.start()

    expect(setInterval).toHaveBeenCalledWith(callback, UPDATE_INTERVAL_MILLISEC)
  })

  test('stop timer', () => {
    const callback = jest.fn()

    const hook = renderHook(() => useScheduler(callback))
    const mockId = 133 as unknown as NodeJS.Timeout

    intervalSpy.mockReturnValueOnce(mockId)

    hook.result.current.start()
    hook.result.current.stop()

    expect(clearInterval).toHaveBeenCalledWith(mockId)
  })

  test('stop timer on unmount', async () => {
    const callback = jest.fn()

    const hook = renderHook(() => useScheduler(callback))
    const mockId = 133 as unknown as NodeJS.Timeout

    intervalSpy.mockReturnValueOnce(mockId)

    hook.result.current.start()

    await hook.unmount()

    expect(clearInterval).toHaveBeenCalledWith(mockId)
  })
})
