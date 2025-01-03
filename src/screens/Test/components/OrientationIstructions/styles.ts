import styled from 'styled-components/native'
import { Overlay, Screen } from '@components'

export const OrientationContainer = styled(Screen)`
  justify-content: center;
`

export const OrientationOverlay = styled(Overlay)`
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 60px;
  padding-bottom: 60px;
`

export const HomeIconWrapper = styled.View`
  align-items: flex-end;
`
