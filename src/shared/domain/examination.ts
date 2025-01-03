import { EyesResult } from '@shared/domain/eyes-result'
import { ExaminationResult } from '@shared/domain/examination-type'
import { UUID } from '@shared/uuid'

export class Examination {
  constructor(
    private _mobileId: string,
    private _patientName: string,
    private _comment: string,
    private _mobileCreatedAt: Date,
    private _normal: EyesResult | undefined,
    private _pinhole: EyesResult | undefined,
    private _isSynced: boolean = true
  ) {}

  static fromResults(results: ExaminationResult): Examination {
    const { patientName, comment, mobileCreatedAt, normal, pinhole } = results
    return new Examination(
      UUID.v4(),
      patientName || '',
      comment || '',
      mobileCreatedAt || new Date(),
      normal,
      pinhole,
      false
    )
  }

  get mobileId(): string {
    return this._mobileId
  }

  get patientName(): string {
    return this._patientName
  }

  get comment(): string {
    return this._comment
  }

  get normal(): EyesResult | undefined {
    return this._normal
  }

  get pinhole(): EyesResult | undefined {
    return this._pinhole
  }

  get mobileCreatedAt(): Date {
    return this._mobileCreatedAt
  }

  get isSynced(): boolean {
    return this._isSynced
  }
}
