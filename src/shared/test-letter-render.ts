import { LetterDirection } from './domain/test-letter-direction'

const FIVE_ARCMINUTES = 5.0 / 60.0
const RADIAN = 180
const DEGREES = (FIVE_ARCMINUTES * Math.PI) / RADIAN
const CENTIMETER = 100
const INCH = 2.54
const PIXELS_PER_INCH = 160
const LETTER_SIZE = 250
const FULL_OPTOTYPE_SIZE = 600

export class TestLetterRender {
  public static calculateLetterSize(ratio: number, distance: number): number {
    const sizeInCm = Math.tan(DEGREES) * (distance / ratio) * CENTIMETER
    const size = (((sizeInCm / INCH) * PIXELS_PER_INCH) / LETTER_SIZE) * FULL_OPTOTYPE_SIZE

    return size
  }

  public static calculateRotation(direction: LetterDirection): number {
    return direction * 90
  }
}
