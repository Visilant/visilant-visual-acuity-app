export enum ApiTag {
  Settings = 'Settings',
  Examinations = 'Examinations'
}

export interface ApiResponse<Data> {
  statusCode: number
  message: string
  data: Data
}

export type Interceptor = (() => void) | (() => Promise<void>)
