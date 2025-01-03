export enum LetterDirection {
  right,
  down,
  left,
  up
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LetterDirection {
  export const getRandomDirection = (): LetterDirection => {
    const directions = [
      LetterDirection.right,
      LetterDirection.down,
      LetterDirection.left,
      LetterDirection.up
    ]

    const randomIndex = Math.floor(Math.random() * 4)
    const random = directions[randomIndex]

    return random
  }
}
