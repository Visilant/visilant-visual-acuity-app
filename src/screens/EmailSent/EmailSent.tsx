import { Button, Row, Text, TextStyles } from '@components'
import { FeedbackScreen } from '@components/views/styles'
import { RootStackScreenProps } from '@screens/stack'
import { Image } from 'react-native'
import { withErrorBoundary } from '@hocs/withErrorBoundary'

const EmailSent = ({ navigation }: RootStackScreenProps<'EmailSent'>) => {
  const navigate = () => navigation.navigate('Login')
  return (
    <FeedbackScreen>
      <Row>
        <Image source={require('@assets/email-sent.png')} />
      </Row>
      <Text namespace="screens" text="emailSent.title" textStyle={TextStyles.CenteredTitle} />
      <Text
        namespace="screens"
        text="emailSent.description"
        textStyle={TextStyles.CenteredParagraph}
      />
      <Row>
        <Button namespace="screens" text="emailSent.button" capitalize={true} onPress={navigate} />
      </Row>
    </FeedbackScreen>
  )
}

export default withErrorBoundary(EmailSent)
