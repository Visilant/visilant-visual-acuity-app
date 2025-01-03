import { Body, SafeView, Screen, Text } from '@components'
import { Carousel } from '@components/Carousel'
import { CarouselScrollState } from '@components/Carousel/types'
import { FadeInOutView } from '@components/FadeInOutView'
import { TextStyles } from '@components/Text'
import { useFullWidth } from '@hooks/useFullWidth'
import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { RootStackScreenProps } from '@screens/stack'
import { stepContents } from './content'
import { Animation, AnimationCard, CaptionTitle, Captions, Header, StartTestButton } from './style'
import { withErrorBoundary } from '@hocs/withErrorBoundary'

const Onboarding = ({ navigation }: RootStackScreenProps<'Onboarding'>) => {
  const [page, setPage] = useState(0)
  const [scrollState, setScrollState] = useState(CarouselScrollState.idle)
  const imageWidth = useFullWidth()

  return (
    <Screen noBg>
      <SafeView compact>
        <Header>
          <Image source={require('@assets/logo.png')} />
        </Header>
        <Body fullHeight>
          <Carousel
            height={imageWidth}
            onPageChange={index => setPage(index)}
            onScrollStateChanged={state => setScrollState(state)}
          >
            {stepContents.map((step, i) => (
              <View key={step.title}>
                <AnimationCard>
                  <Animation
                    source={stepContents[i].animation}
                    style={{ width: imageWidth, height: imageWidth }}
                  />
                </AnimationCard>
              </View>
            ))}
          </Carousel>

          <Captions>
            {stepContents.map((step, i) => (
              <FadeInOutView
                absolute
                key={step.title}
                visible={page === i && scrollState === CarouselScrollState.idle}
              >
                <CaptionTitle>
                  <Text namespace="screens" text={step.title} textStyle={TextStyles.Title} />
                </CaptionTitle>
                <Text namespace="screens" text={step.text} textStyle={TextStyles.Paragraph} />
              </FadeInOutView>
            ))}
          </Captions>

          <StartTestButton
            namespace="screens"
            text="onboarding.button"
            capitalize={true}
            onPress={() => navigation.navigate('Test', {})}
          />
        </Body>
      </SafeView>
    </Screen>
  )
}

export default withErrorBoundary(Onboarding)
