import React from 'react'
import { Container, Label } from './styles'
import { TagComponent } from './types'

export const Tag: TagComponent = ({ selected, onPress, text }) => (
  <Container selected={selected} onPress={onPress}>
    <Label selected={selected}>{text}</Label>
  </Container>
)
