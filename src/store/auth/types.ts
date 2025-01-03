export interface AuthState {
  token: string | null
  refresh_token: string | null
}

export interface AuthPayload {
  token: string
  refresh_token: string
}

export enum LoginResult {
  Success = 'Success',
  Failed = 'Failed'
}
