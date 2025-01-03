import SnellenLetterIcon from '@assets/svg/snellen_wide.svg'
import React from 'react'
import { TestLetterComponent } from './types'

export const TestLetter: TestLetterComponent = ({ size, rotation }) => (
  <SnellenLetterIcon width={size} height={size} rotation={rotation} />
)
