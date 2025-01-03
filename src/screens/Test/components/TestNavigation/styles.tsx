import { Button } from '@components'
import { View } from 'react-native'
import styled from 'styled-components/native'

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const NavigationContainer = styled(View)`
  flex: 1;
  gap: 20px;
  padding-top: 38px;
  padding-bottom: 50px;
`

export const ButtonArea = styled(View)`
  display: flex;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
`

export const ButtonContainer = styled(View)`
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex: 1;
`

export const StyledButton = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: Libre Franklin;
  flex: 1;
  border-radius: 15px;
  height: 100%;
  font-weight: normal;
  font-size: 23px;
`
