import { Button, Card } from '@components'
import { Image, View } from 'react-native'
import styled from 'styled-components/native'

export const Header = styled(View)`
  margin-bottom: 16px;
`
export const Animation = styled(Image)`
  width: 100%;
  height: 100%;
`
export const AnimationCard = styled(Card)`
  padding: 0;
  overflow: hidden;
`
export const Captions = styled(View)`
  position: 'relative';
  min-height: 80px;
`
export const CaptionTitle = styled(View)`
  margin-top: -10px;
  margin-bottom: 20px;
`
export const StartTestButton = styled(Button)`
  margin-top: auto;
  flex-grow: 0;
`
