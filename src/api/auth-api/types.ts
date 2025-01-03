export interface User {
  first_name: string
  last_name: string
}

export interface UserDto {
  user: User
  token: string
  refresh_token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RefreshRequest {
  refresh_token: string
}
