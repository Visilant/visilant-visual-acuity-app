import { GestureHandlerRootView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: 60px;
`

export const TestScreen = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: white;
  flex-direction: row;
`

export const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
