import React from 'react'
import { BodyStyle } from './styles'
import { BodyType } from './types'

export const Body: BodyType = ({ children, fullHeight, smallGap }) => {
  return (
    <BodyStyle
      contentContainerStyle={{
        justifyContent: 'flex-start',
        flexDirection: 'column',
        gap: smallGap ? 15 : 35,
        paddingTop: 30,
        paddingBottom: 35,
        flexGrow: fullHeight ? 1 : 0
      }}
    >
      {children}
    </BodyStyle>
  )
}
