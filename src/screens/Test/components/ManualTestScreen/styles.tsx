import { Button } from '@components'
import { View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  flex: 1;
  padding: 60px 30px 30px 30px;
`

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ButtonArea = styled(View)`
  margin-top: 20px;
  margin-bottom: 30px;
  gap: 20px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const StyledButton = styled(Button)`
  flex-direction: row;
  align-items: center;
  font-family: Libre Franklin;
  border-radius: 15px;
  height: 60%;
  flex: 1;
  font-weight: normal;
  font-size: 23px;
`
