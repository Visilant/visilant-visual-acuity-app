import { AlertType } from '@components/Snackbar/types'
import { useAppDispatch, useAppSelector } from '@store'
import { Alert, AlertOptions, selectAlerts, removeAlert, showAlert } from '@store/snackbar'
import uuid from 'react-native-uuid'

const createAlert = (options: AlertOptions): Alert => ({
  ...options,
  visible: true,
  id: uuid.v4() as string
})

export const useSnackbar = () => {
  const dispatch = useAppDispatch()
  const alerts = useAppSelector(selectAlerts)
  const addAlert = ({
    type,
    text,
    namespace
  }: {
    type: AlertType
    text: string
    namespace: string
  }) => {
    const newAlert = createAlert({ type, text, namespace })
    dispatch(showAlert(newAlert))

    return () => {
      dispatch(removeAlert({ id: newAlert.id }))
    }
  }

  return {
    alerts,
    addAlert
  }
}
