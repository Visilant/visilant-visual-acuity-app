import React from 'react'
import { Button, FeedbackScreen, Row, Text, TextStyles } from '@components'

import { ErrorFallbackProps } from './types'
import { OffsetImage } from './styles'
import { useStackNavigation } from '@screens/stack'

export const ErrorFallbackScreen = ({ resetError }: ErrorFallbackProps) => {
  const navigation = useStackNavigation()
  const acknowledgeError = () => {
    resetError()
    navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Dashboard')
  }

  return (
    <FeedbackScreen>
      <Row>
        <OffsetImage source={require('@assets/error.png')} />
      </Row>
      <Text namespace="screens" text="error.title" textStyle={TextStyles.CenteredTitle} />
      <Row>
        <Button
          namespace="screens"
          text="error.button"
          capitalize={true}
          onPress={acknowledgeError}
        />
      </Row>
    </FeedbackScreen>
  )
}
