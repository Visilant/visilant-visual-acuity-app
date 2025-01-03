import { EyeResult, EyesResult } from '@shared/domain/eyes-result'
import { ExaminationType } from '@shared/domain/examination-type'

export class ExaminationResults {
  constructor(
    private _mobileId?: string,
    private _normal?: EyesResult,
    private _pinhole?: EyesResult
  ) {}

  get normal(): EyesResult | undefined {
    return this._normal
  }

  get pinhole(): EyesResult | undefined {
    return this._pinhole
  }
  get mobileId(): string | undefined {
    return this._mobileId
  }

  copy(): ExaminationResults {
    return new ExaminationResults(this._mobileId, this._normal, this._pinhole)
  }

  public setSnellen(type: ExaminationType, value: EyeResult | undefined) {
    if (type === ExaminationType.NormalLeft) {
      this._normal = EyesResult.withLeft(this._normal, value)
    } else if (type === ExaminationType.NormalRight) {
      this._normal = EyesResult.withRight(this._normal, value)
    } else if (type === ExaminationType.PinholeLeft) {
      this._pinhole = EyesResult.withLeft(this._pinhole, value)
    } else if (type === ExaminationType.PinholeRight) {
      this._pinhole = EyesResult.withRight(this._pinhole, value)
    }
  }
}
