import { Icon, IconsEnum, SafeView, Screen, Text, TextStyles } from '@components'
import { ManualTestScreenComponent } from '@screens/Test/components/ManualTestScreen/types'
import { ButtonType } from '@components/Button/types'

import { Header, ButtonArea, StyledButton, Container } from './styles'

const ManualTestButton = props => {
  return (
    <StyledButton
      type={ButtonType.soft}
      onPress={props.onPress}
      text={props.text}
      namespace="test"
      icon={<Icon icon={props.icon} width={77} height={54} marginRight={15} />}
      isDisabled={props.disabled}
    />
  )
}

export const ManualTestScreen: ManualTestScreenComponent = ({ title, onPress }) => (
  <Screen>
    <SafeView>
      <Container>
        <Header>
          <Text textStyle={TextStyles.Title} raw text={title} />
        </Header>

        <ButtonArea>
          <ManualTestButton
            onPress={() => onPress(true)}
            text="manual.correct"
            icon={IconsEnum.correct}
          />
          <ManualTestButton
            onPress={() => onPress(false)}
            text="manual.failed"
            icon={IconsEnum.failed}
          />
        </ButtonArea>
      </Container>
    </SafeView>
  </Screen>
)
