import { AlertType } from './types'
import { Box, LabelText, Wrapper } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TextStyles } from '@components/Text'
import { useSnackbar } from '@hooks/useSnackbar'
import { Icon, IconsEnum } from '@components/Icon'

const alertTypeToIconType = {
  [AlertType.error]: IconsEnum.close,
  [AlertType.success]: IconsEnum.check,
  [AlertType.warning]: IconsEnum.alert
}

export const Snackbar = () => {
  const insets = useSafeAreaInsets()
  const { alerts } = useSnackbar()

  return (
    <Wrapper insets={insets}>
      {alerts.map(alert => (
        <Box key={alert.id} type={alert.type} visible={alert.visible} slide>
          <Icon icon={alertTypeToIconType[alert.type]} color="#fff" />
          <LabelText textStyle={TextStyles.Alert} namespace={alert.namespace} text={alert.text} />
        </Box>
      ))}
    </Wrapper>
  )
}
