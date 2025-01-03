import React, { useState } from 'react'
import { Body, Button, Footer, Header, Input, SafeView, Screen, Text } from '@components'
import { InputType } from '@components/Input'
import { TextStyles } from '@components/Text'
import { withErrorBoundary } from '@hocs/withErrorBoundary'
import { ResultCard } from '@screens/Results/components/ResultCard'
import { useSaveResult } from '@screens/Results/utils/useSaveResult'

import { Container, LabelTextStyle, Row, Wrapper } from './styles'
import { useAppSelector } from '@store'
import { selectActiveExamination, selectExaminationById } from '@store/examinations'
import { TestType } from '@screens/Results/utils/test-type'
import { TitleTextStyle } from '../styles'

const ResultsScreen = () => {
  const results = useAppSelector(selectActiveExamination)
  const entity = useAppSelector(selectExaminationById(results?.mobileId))

  const [patientName, setPatientName] = useState<string>(entity?.patientName ?? '')
  const [comment, setComment] = useState<string>(entity?.comment ?? '')

  const { save } = useSaveResult()

  const handleSave = async () => {
    await save({
      mobileId: results?.mobileId,
      patientName,
      comment,
      normal: results?.normal,
      pinhole: results?.pinhole
    })
  }

  return (
    <Screen>
      <SafeView>
        <Header>
          <Text namespace="screens" text="results.title" textStyle={TextStyles.Title} />
        </Header>
        <Body>
          <ResultCard result={results?.normal} testType={TestType.Visual} />
          <ResultCard result={results?.pinhole} testType={TestType.Pinhole} />
          <Wrapper>
            <Text textStyle={TitleTextStyle}>results.info</Text>
            <Container>
              <Row>
                <Text textStyle={LabelTextStyle}>results.name</Text>
                <Input value={patientName} onChange={setPatientName} alter={true} />
              </Row>
              <Row>
                <Text textStyle={LabelTextStyle}>results.comment</Text>
                <Input
                  value={comment}
                  onChange={setComment}
                  alter={true}
                  type={InputType.textArea}
                />
              </Row>
            </Container>
          </Wrapper>
        </Body>
      </SafeView>
      <Footer>
        <Button namespace="screens" text="results.save" capitalize={true} onPress={handleSave} />
      </Footer>
    </Screen>
  )
}

export default withErrorBoundary(ResultsScreen)
