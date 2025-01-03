import { AppDispatch, RootState } from '@store'
import { ExaminationStore } from '@shared/store/examination-store'
import { createExaminationThunk, markSynced } from '@store/examinations'
import { ExaminationMapper } from '@shared/mappers/examination-mapper'

export class SyncExaminationHandler {
  constructor(
    private state: RootState,
    private dispatch: AppDispatch
  ) {}

  async process() {
    await Promise.all(
      this.examinations.map(async item => {
        if (this.shouldSync(item)) {
          await this.sendSyncRequest(item)
        }
      })
    )
  }

  async sendSyncRequest(examination: ExaminationStore) {
    const createDto = ExaminationMapper.fromStoreToCreateDto(examination)

    await this.dispatch(createExaminationThunk(createDto)).unwrap()

    this.dispatch(markSynced({ mobileId: examination.mobileId }))
  }

  shouldSync(examination: ExaminationStore) {
    return !examination.isSynced
  }

  get examinations() {
    return this.state.examination.entities
  }
}
