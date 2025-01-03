import { Examination } from './examination'

export class ExaminationList {
  constructor(private _values: Examination[]) {}
  get values(): Examination[] {
    return this._values
  }
}
