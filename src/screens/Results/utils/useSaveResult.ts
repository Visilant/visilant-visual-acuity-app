import { AlertType } from '@components/Snackbar/types'
import { useStackNavigation } from '@screens/stack'
import { useSnackbar } from '@hooks/useSnackbar'
import { useAppDispatch, useAppSelector } from '@store'
import { clearActiveResults, saveResult, selectDeepLinkParams } from '@store/examinations'
import { Examination } from '@shared/domain/examination'
import { useCallback } from 'react'
import { useDeepLinkCallback } from './useDeepLinkCallback'
import { ExaminationToSave } from '@shared/domain/examination-type'

export const snackbarFeedback = {
  success: { type: AlertType.success, text: 'success', namespace: 'alerts' }
}

export const useSaveResult = () => {
  const navigation = useStackNavigation()
  const snackbar = useSnackbar()
  const dispatch = useAppDispatch()
  const deepLinkParams = useAppSelector(selectDeepLinkParams)
  const { navigateToTelemed } = useDeepLinkCallback()

  const save = useCallback(
    async (results: ExaminationToSave) => {
      dispatch(clearActiveResults())
      if (deepLinkParams === undefined) {
        dispatch(saveResult(results))
      } else {
        const { patientName, comment, normal, pinhole } = results
        const examination = Examination.fromResults({ patientName, comment, normal, pinhole })
        navigateToTelemed(examination, deepLinkParams)
      }
      snackbar.addAlert(snackbarFeedback.success)
      navigation.navigate('Dashboard')
    },
    [deepLinkParams, navigation, snackbar, dispatch]
  )

  return { save }
}
