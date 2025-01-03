import {
  SnellenChartDictionary,
  SnellenChartItem,
  SnellenChartRatio,
  sortSnellenChartRatios
} from './snellen-chart'
import { LetterDirection } from './test-letter-direction'

// dec: 0.33, LogMAR 0.5
export const PHASE_CUTOFF: SnellenChartRatio = '0.33'

export class SnellenChartTest {
  private _counter = 0
  private _direction = LetterDirection.right
  private _correct = 0
  private _incorrect = 0
  private readonly _selectedCutoffs: SnellenChartRatio[]

  constructor(selectedCutoffs: SnellenChartRatio[]) {
    this._selectedCutoffs = sortSnellenChartRatios(selectedCutoffs)

    this.setNextDirection()
  }

  public checkResult(answer: LetterDirection): void {
    if (this.isFinished) return

    this.setAnswerCounters(answer)

    if (this.isFinished) return

    this.setNextDirection()

    if (this.canProceed()) {
      this.incrementCounter()
      this.resetAnswerCounters()
    }
  }

  private canProceed(): boolean {
    if (this.isFirstPhase) {
      return (
        (this._incorrect === 0 && this._correct >= 1) ||
        (this._incorrect >= 1 && this._correct >= 2)
      )
    } else {
      return this._correct >= 2
    }
  }

  private setAnswerCounters(answer: LetterDirection) {
    if (this.isAnswerCorrect(answer)) this._correct++
    else this._incorrect++
  }

  private resetAnswerCounters() {
    this._incorrect = 0
    this._correct = 0
  }
  private incrementCounter() {
    if (this._counter < this.ratios.length) {
      this._counter++
    }
  }

  public get isFinished(): boolean {
    return this._counter === this.ratios.length || this._incorrect >= 2
  }

  private isAnswerCorrect(answer: LetterDirection): boolean {
    return answer === this._direction
  }

  private setNextDirection() {
    this._direction = LetterDirection.getRandomDirection()
  }

  public get isFirstPhase(): boolean {
    const currentRatio = this.cutoff.ratio

    return (
      SnellenChartDictionary[currentRatio].decimal < SnellenChartDictionary[PHASE_CUTOFF].decimal
    )
  }

  public get ratios(): SnellenChartRatio[] {
    return this._selectedCutoffs
  }

  public get cutoff() {
    return SnellenChartDictionary[
      this.ratios[Math.min(this.displayCounter, this.ratios.length - 1)]
    ]
  }

  public get answer(): SnellenChartItem | undefined {
    if (this.answerCounter < 0) return undefined
    return SnellenChartDictionary[this.ratios[this.answerCounter]]
  }

  public get displayCounter() {
    return this._counter
  }

  public get answerCounter() {
    return this._counter - 1
  }

  public get direction() {
    return this._direction
  }
}
