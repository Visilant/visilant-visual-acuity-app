import { Text } from '@components'
import { Icon, IconsEnum } from '@components/Icon'
import { TextStyles } from '@components/Text'
import React from 'react'
import { Image, useWindowDimensions } from 'react-native'
import { useStackNavigation } from '@screens/stack'
import { HomeIconWrapper, OrientationContainer, OrientationOverlay } from './styles'

const imageCutoff = 100
const imageOriginalWidth = 738
const imageOriginalHeight = 880

export const OrientationInstructions = () => {
  const navigation = useStackNavigation()
  const { width } = useWindowDimensions()
  const imageWidth = width + imageCutoff

  return (
    <OrientationContainer>
      <Image
        source={require('@assets/animations/rotate.gif')}
        style={{
          width: imageWidth,
          height: (imageWidth / imageOriginalWidth) * imageOriginalHeight,
          marginLeft: -(imageCutoff / 2),
          marginTop: -100
        }}
      />
      <OrientationOverlay>
        <HomeIconWrapper>
          <Icon
            icon={IconsEnum.home}
            action={() => navigation.navigate('Dashboard')}
            testId="orientation-instructions.home"
          />
        </HomeIconWrapper>
        <Text textStyle={TextStyles.Title} text="test.orientation.rotate" />
      </OrientationOverlay>
    </OrientationContainer>
  )
}
