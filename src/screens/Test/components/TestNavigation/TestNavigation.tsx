import { Button, Icon, SafeView, Screen, Text } from '@components'
import { ButtonType } from '@components/Button/types'
import { TextStyles } from '@components/Text'
import { ButtonArea, ButtonContainer, Header, NavigationContainer, StyledButton } from './styles'
import { IconsEnum } from '@components/Icon'
import {
  TestNavigationButtonComponent,
  TestNavigationComponent
} from '@screens/Test/components/TestNavigation/types'
import { ExaminationType } from '@shared/domain/examination-type'

export const TestNavigationButton: TestNavigationButtonComponent = props => {
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

export const TestNavigation: TestNavigationComponent = ({
  result,
  onSelectTest,
  onFinishPress
}) => {
  const onSelect = (type: ExaminationType) => () => {
    onSelectTest(type)
  }

  const canNavigate = (type: ExaminationType): boolean => {
    const machine = {
      [ExaminationType.NormalRight]: () => result.normal?.right === undefined,
      [ExaminationType.NormalLeft]: () => result.normal?.left === undefined,
      [ExaminationType.PinholeRight]: () => result.pinhole?.right === undefined,
      [ExaminationType.PinholeLeft]: () => result.pinhole?.left === undefined
    }

    return machine[type]()
  }

  return (
    <Screen>
      <SafeView compact>
        <NavigationContainer>
          <Header>
            <Text textStyle={TextStyles.Title} namespace="test" text="navigation.title" />
            <Button
              type={ButtonType.outlined}
              onPress={onFinishPress}
              capitalize
              namespace="test"
              text="navigation.finish"
            />
          </Header>
          <ButtonArea>
            <ButtonContainer>
              <TestNavigationButton
                onPress={onSelect(ExaminationType.NormalRight)}
                text="normal.right"
                disabled={!canNavigate(ExaminationType.NormalRight)}
                icon={IconsEnum.rightEye}
              />
              <TestNavigationButton
                onPress={onSelect(ExaminationType.NormalLeft)}
                text="normal.left"
                disabled={!canNavigate(ExaminationType.NormalLeft)}
                icon={IconsEnum.leftEye}
              />
            </ButtonContainer>
            <ButtonContainer>
              <TestNavigationButton
                onPress={onSelect(ExaminationType.PinholeRight)}
                text="pinhole.right"
                disabled={!canNavigate(ExaminationType.PinholeRight)}
                icon={IconsEnum.rightEyePinhole}
              />
              <TestNavigationButton
                onPress={onSelect(ExaminationType.PinholeLeft)}
                text="pinhole.left"
                disabled={!canNavigate(ExaminationType.PinholeLeft)}
                icon={IconsEnum.leftEyePinhole}
              />
            </ButtonContainer>
          </ButtonArea>
        </NavigationContainer>
      </SafeView>
    </Screen>
  )
}
