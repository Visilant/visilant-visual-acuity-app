import { RootState } from '@store'

const mockRootState: RootState = {
  _persist: { version: 1, rehydrated: false },
  examination: {
    entities: [],
    activeExamination: undefined,
    deepLinkParams: undefined
  },
  auth: {
    token: 'mock-token',
    refresh_token: 'mock-refresh-token',
    _persist: {
      version: 0,
      rehydrated: false
    }
  },
  settings: { showDashboardInstructions: true, locale: 'en-EN' },
  snackbar: { alerts: [] },
  network: {
    isQueuePaused: false,
    actionQueue: [],
    isConnected: null
  }
}

export const getMockState = () => JSON.parse(JSON.stringify(mockRootState))
