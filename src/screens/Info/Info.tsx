import { Body, Button, Card, CardRow, Header, Icon, SafeView, Screen, Text } from '@components'
import { IconsEnum } from '@components/Icon'
import { TextStyles } from '@components/Text'
import React from 'react'
import { RootStackScreenProps } from '@screens/stack'
import { withErrorBoundary } from '@hocs/withErrorBoundary'

const Info = ({ navigation }: RootStackScreenProps<'Info'>) => {
  return (
    <Screen>
      <SafeView>
        <Header>
          <Text namespace="screens" text="info.title" textStyle={TextStyles.Title} />
          <Icon icon={IconsEnum.close} action={() => navigation.navigate('Dashboard')} />
        </Header>
        <Body>
          <Card>
            <CardRow>
              <Text namespace="screens" text="info.smallTitle" textStyle={TextStyles.Label} />
            </CardRow>
            <CardRow>
              <Text namespace="screens" text="info.intro" textStyle={TextStyles.Paragraph} />
            </CardRow>
          </Card>
          <Button
            namespace="screens"
            text="info.button"
            capitalize={true}
            onPress={() => navigation.navigate('Onboarding')}
          />
        </Body>
      </SafeView>
    </Screen>
  )
}

export default withErrorBoundary(Info)
