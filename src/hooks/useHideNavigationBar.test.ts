import { act, renderHook } from '@testing-library/react-native'
import { useHideNavigationBar } from '@hooks/useHideNavigationBar'
import { setStatusBarHidden } from 'expo-status-bar'
import * as ReactNavigation from '@react-navigation/native'
import { EffectCallback, useEffect } from 'react'

import * as NavigationBar from 'expo-navigation-bar'

const setVisibilityAsyncSpy = jest
  .spyOn(NavigationBar, 'setVisibilityAsync')
  .mockImplementation((_: NavigationBar.NavigationBarVisibility) => Promise.resolve())
const setBehaviorAsyncSpy = jest
  .spyOn(NavigationBar, 'setBehaviorAsync')
  .mockImplementation((_: NavigationBar.NavigationBarBehavior) => Promise.resolve())

jest.mock('@react-navigation/native', () => {
  return {
    __esModule: true,
    ...jest.requireActual('@react-navigation/native')
  }
})
jest
  .spyOn(ReactNavigation, 'useFocusEffect')
  .mockImplementation(jest.fn((fn: EffectCallback) => useEffect(fn, [])))
jest.mock('expo-status-bar')
const mockSetStatusBarHidden = setStatusBarHidden as jest.Mock

describe('useHideNavigationBar', () => {
  beforeEach(() => {
    setVisibilityAsyncSpy.mockClear()
    setBehaviorAsyncSpy.mockClear()
    mockSetStatusBarHidden.mockClear()
  })

  test('mount', async () => {
    const { rerender } = await renderHook(() => useHideNavigationBar())

    await act(async () => {
      await rerender(undefined)
    })

    expect(mockSetStatusBarHidden).toHaveBeenCalledWith(true, 'slide')
    expect(setVisibilityAsyncSpy).toHaveBeenCalledWith('hidden')
    expect(setBehaviorAsyncSpy).toHaveBeenCalledWith('overlay-swipe')
  })

  test('unmount', async () => {
    const { unmount } = await renderHook(() => useHideNavigationBar())

    setVisibilityAsyncSpy.mockClear()
    setBehaviorAsyncSpy.mockClear()
    mockSetStatusBarHidden.mockClear()

    await act(async () => {
      await unmount()
    })

    expect(mockSetStatusBarHidden).toHaveBeenCalledWith(false, 'slide')
    expect(setVisibilityAsyncSpy).toHaveBeenCalledWith('visible')
    expect(setBehaviorAsyncSpy).toHaveBeenCalledWith('inset-touch')
  })
})
