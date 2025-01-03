import { Button, CardRow, Input, Row, Text } from '@components'
import { TextStyles } from '@components/Text'
import { LoginCard, LoginScreen } from '@components/views/styles'
import React, { useEffect, useState } from 'react'
import { Image, Pressable } from 'react-native'
import { RootStackScreenProps } from '@screens/stack'
import { withErrorBoundary } from '@hocs/withErrorBoundary'

const ResetPassword = ({ navigation }: RootStackScreenProps<'ResetPassword'>) => {
  const navigate = () => navigation.navigate('Login')
  const [email, setEmail] = useState<string>('')
  const [failed, setFailed] = useState<boolean>(false)

  useEffect(() => {
    setFailed(false)
  }, [email])

  const handleSubmit = () => {
    navigation.navigate('EmailSent')
  }

  return (
    <LoginScreen>
      <Row>
        <Image source={require('@assets/logo.png')} />
      </Row>
      <Text namespace="screens" text="reset.description" textStyle={TextStyles.CenteredParagraph} />
      <LoginCard>
        <CardRow>
          <Text namespace="screens" text="reset.username" textStyle={TextStyles.Label} />
          <Input
            value={email}
            onChange={setEmail}
            placeholder="reset.username"
            namespace="screens"
            error={failed}
          />
        </CardRow>
      </LoginCard>
      <Row>
        <Button namespace="screens" text="reset.button" capitalize={true} onPress={handleSubmit} />
      </Row>
      <Row>
        <Pressable onPress={navigate}>
          <Text namespace="screens" text="reset.goToLoginButton" textStyle={TextStyles.Label} />
        </Pressable>
      </Row>
    </LoginScreen>
  )
}

export default withErrorBoundary(ResetPassword)
