import * as TaskManager from 'expo-task-manager'
import * as BackgroundFetch from 'expo-background-fetch'
import { Platform } from 'react-native'

export type TaskCallback = () => Promise<void>

export class Task {
  constructor(
    private _taskName: string,
    _taskCallback: TaskCallback
  ) {
    const taskExecutor = Task.taskExecutorFactory(_taskCallback)
    TaskManager.defineTask(_taskName, taskExecutor)
  }

  async register() {
    if (await Task.isAvailable()) {
      Task.registerTask(this.taskName)
    }
  }

  async unregister() {
    if (await Task.isAvailable()) {
      Task.unregisterTask(this.taskName)
    }
  }

  get taskName() {
    return this._taskName
  }

  static get config() {
    return {
      minimumInterval: 5 * 60,
      ...Platform.select({
        android: {
          stopOnTerminate: false,
          startOnBoot: true
        },
        default: {}
      })
    }
  }

  static taskExecutorFactory(
    taskCallback: TaskCallback
  ): TaskManager.TaskManagerTaskExecutor<unknown> {
    return async () => {
      try {
        await taskCallback()
        return BackgroundFetch.BackgroundFetchResult.NewData
      } catch (error) {
        return BackgroundFetch.BackgroundFetchResult.Failed
      }
    }
  }

  static async registerTask(taskName: string) {
    return await BackgroundFetch.registerTaskAsync(taskName, Task.config)
  }

  static async unregisterTask(taskName: string) {
    return await BackgroundFetch.unregisterTaskAsync(taskName)
  }

  public static async isAvailable() {
    const status = await BackgroundFetch.getStatusAsync()
    return status === BackgroundFetch.BackgroundFetchStatus.Available
  }
}
