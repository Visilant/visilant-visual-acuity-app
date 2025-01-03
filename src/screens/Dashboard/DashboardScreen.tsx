import React from 'react'

import {
  Body,
  Footer,
  Header,
  Icon,
  IconsEnum,
  SafeView,
  Screen,
  Text,
  TextStyles
} from '@components'

import { ResultCard } from './components/ResultCard'

import { FooterImage, FooterInstructionSection, IconFlexBox, StartTestButton } from './styles'
import { useStackNavigation } from '@screens/stack'
import { useAppDispatch, useAppSelector } from '@store'
import { hideDashboardInstructions, selectShowDashboardInstructions } from '@store/settings'
import { useUser } from '@hooks/useUser'
import { withErrorBoundary } from '@hocs/withErrorBoundary'
import {
  clearActiveResults,
  clearDeepLinkParams,
  setActiveExaminationById
} from '@store/examinations'
import { useSortedExaminations } from './utils/useSortedExaminations'

const DashboardScreen = () => {
  const examinations = useSortedExaminations()
  const showInstruction = useAppSelector(selectShowDashboardInstructions)
  const dispatch = useAppDispatch()
  const { userName } = useUser()
  const navigation = useStackNavigation()

  const handleStart = () => {
    navigation.navigate('Test', {})
    dispatch(clearActiveResults())
    dispatch(clearDeepLinkParams())
    dispatch(hideDashboardInstructions())
  }

  const handleOpenResult = (mobileId: string) => () => {
    dispatch(setActiveExaminationById({ mobileId }))
    navigation.navigate('Results')
  }

  return (
    <>
      <Screen noBg={false}>
        <SafeView>
          <Header>
            <Text raw text={userName} textStyle={TextStyles.Title} />
            <IconFlexBox>
              <Icon icon={IconsEnum.info} action={() => navigation.navigate('Info')} />
              <Icon icon={IconsEnum.iconSettings} action={() => navigation.navigate('Settings')} />
            </IconFlexBox>
          </Header>
          <Body smallGap>
            <Text namespace="screens" text={'dashboard.subTitle'} textStyle={TextStyles.Footer} />
            {examinations?.map(value => (
              <ResultCard
                key={value.mobileId}
                examination={value}
                onPress={handleOpenResult(value.mobileId)}
              />
            ))}
          </Body>
        </SafeView>
      </Screen>
      <Footer>
        {showInstruction && (
          <FooterInstructionSection>
            <Text
              namespace="screens"
              text={'dashboard.instruction'}
              textStyle={TextStyles.Footer}
            />
            <FooterImage source={require('@assets/dashboard_footer.png')} />
          </FooterInstructionSection>
        )}
        <StartTestButton
          namespace="screens"
          text="dashboard.button"
          capitalize={true}
          onPress={handleStart}
        />
      </Footer>
    </>
  )
}

export default withErrorBoundary(DashboardScreen)
