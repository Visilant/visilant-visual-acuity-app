import { renderHook } from '@testing-library/react-native'
import { getMockState } from '@jest/mocks/root-state'
import { useCutoffs } from './useCutoffs'
import * as store from '@store'
import * as useSettings from './useSettings'

const mockStates = [
  {
    ...getMockState(),
    settings: {
      userSettings: {
        selectedCutoffs: ['0.1', '0.16']
      }
    },
    examination: {
      deepLinkParams: {
        cutoffs: '0.1;0.125'
      }
    }
  },
  {
    ...getMockState(),
    settings: {
      userSettings: {
        selectedCutoffs: ['0.1', '0.16']
      }
    }
  },
  {
    ...getMockState(),
    settings: {
      userSettings: {
        selectedCutoffs: []
      }
    }
  }
]

jest.mock('@store/examinations', () => {
  return {
    __esModule: true,
    selectDeepLinkParams: state => state.examination.deepLinkParams
  }
})
jest.mock('./useSettings', () => {
  return {
    __esModule: true,
    useSettings: jest.fn()
  }
})
jest.mock('@store', () => {
  return {
    __esModule: true,
    useAppSelector: jest.fn()
  }
})

const mockUseAppSelector = jest.spyOn(store, 'useAppSelector')
const mockUseSettings = jest.spyOn(useSettings, 'useSettings')

describe('useCutoffs', () => {
  beforeEach(() => {
    mockUseAppSelector.mockReset()
    mockUseSettings.mockReset()
  })

  test('deeplink override', () => {
    mockUseAppSelector.mockImplementationOnce(selector => selector(mockStates[0]))
    mockUseSettings.mockImplementationOnce(() => ({
      settings: mockStates[0].settings.userSettings,
      updateSettings: jest.fn()
    }))
    const { result } = renderHook(() => useCutoffs())

    expect(result.current).toStrictEqual(['0.1', '0.125'])
  })

  test('settings override', () => {
    mockUseAppSelector.mockImplementationOnce(selector => selector(mockStates[1]))
    mockUseSettings.mockImplementationOnce(() => ({
      settings: mockStates[1].settings.userSettings,
      updateSettings: jest.fn()
    }))
    const { result } = renderHook(() => useCutoffs())

    expect(result.current).toStrictEqual(['0.1', '0.16'])
  })

  test('default', () => {
    mockUseAppSelector.mockImplementationOnce(selector => selector(mockStates[2]))
    mockUseSettings.mockImplementationOnce(() => ({
      settings: mockStates[2].settings.userSettings,
      updateSettings: jest.fn()
    }))
    const { result } = renderHook(() => useCutoffs())

    expect(result.current).toStrictEqual([
      '0.1',
      '0.125',
      '0.16',
      '0.2',
      '0.25',
      '0.33',
      '0.4',
      '0.5',
      '0.67',
      '0.8',
      '1.0'
    ])
  })
})
