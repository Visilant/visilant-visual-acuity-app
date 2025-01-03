import { persistor, store } from '@store'
import { syncExaminations } from '@store/examinations'
import { Task, TaskCallback } from './task'

const BACKGROUND_FETCH_TASK = 'background-fetch'

const task: TaskCallback = async () => {
  if (persistor.getState().bootstrapped === false) {
    throw new Error('Persistor is not bootstrapped')
  }
  await store.dispatch(syncExaminations()).unwrap()
  await persistor.flush()
}

export const backgroundFetchTask = new Task(BACKGROUND_FETCH_TASK, task)
