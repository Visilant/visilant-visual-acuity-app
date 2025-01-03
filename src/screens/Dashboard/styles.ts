import { Button, FlexBox } from '@components'
import { View } from 'react-native'
import styled from 'styled-components/native'

export const StartTestButton = styled(Button)`
  margin-top: auto;
  flex-grow: 0;
`

export const IconFlexBox = styled(FlexBox)`
  gap: 10px;
`

export const FooterInstructionSection = styled(View)`
  display: flex;
  flexdirection: row;
`
export const FooterImage = styled.Image`
  width: 187px;
  height: 123px;
  position: absolute;
  right: -30px;
  bottom: 0.5%;
  max-width: auto;
`
