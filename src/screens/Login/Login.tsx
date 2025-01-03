import { Button, CardRow, Input, Row, Text } from '@components'
import { InputType } from '@components/Input'
import { AlertType } from '@components/Snackbar/types'
import { TextStyles } from '@components/Text'
import { LoginCard, LoginScreen } from '@components/views/styles'
import { useSnackbar } from '@hooks/useSnackbar'
import React, { useEffect, useState } from 'react'
import { Image, Pressable } from 'react-native'
import { RootStackScreenProps } from '@screens/stack'
import { withErrorBoundary } from '@hocs/withErrorBoundary'
import { useAppDispatch } from '@store'
import { LoginResult, loginThunk } from '@store/auth'

const Login = ({ navigation }: RootStackScreenProps<'Login'>) => {
  const dispatch = useAppDispatch()
  const navigate = () => navigation.navigate('ResetPassword')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [failed, setFailed] = useState<boolean>(false)
  const snackbar = useSnackbar()

  useEffect(() => {
    setFailed(false)
  }, [email, password])

  const handleSubmit = async () => {
    const result = await dispatch(loginThunk({ email, password })).unwrap()

    if (result === LoginResult.Failed) {
      setFailed(true)
      const alert = { type: AlertType.warning, text: 'login.error', namespace: 'screens' }
      snackbar.addAlert(alert)
    }
  }

  return (
    <LoginScreen>
      <Row>
        <Image source={require('@assets/logo.png')} />
      </Row>
      <LoginCard>
        <CardRow>
          <Text namespace="screens" text="login.username" textStyle={TextStyles.Label} />
          <Input
            value={email}
            onChange={setEmail}
            placeholder="login.username"
            namespace="screens"
            error={failed}
          />
        </CardRow>
        <CardRow>
          <Text namespace="screens" text="login.password" textStyle={TextStyles.Label} />
          <Input
            value={password}
            onChange={setPassword}
            placeholder="login.password"
            namespace="screens"
            type={InputType.password}
            error={failed}
          />
        </CardRow>
      </LoginCard>
      <Row>
        <Button namespace="screens" text="login.button" capitalize={true} onPress={handleSubmit} />
      </Row>
      <Row>
        <Pressable onPress={navigate}>
          <Text namespace="screens" text="login.goToResetButton" textStyle={TextStyles.Label} />
        </Pressable>
      </Row>
    </LoginScreen>
  )
}

export default withErrorBoundary(Login)
