export interface RegisterRequest {
  email: string
  first_name: string
  last_name: string
  password: string
  password_confirm: string
  username: string
}

export interface LoginRequest {
  password: string
  username: string
}

export interface RefreshTokenRequest {
  refresh: string
}

export interface AuthUser {
  email: string
  first_name: string
  id: number
  last_name: string
  username: string
}

export interface AuthResponse {
  data: {
    access: string
    refresh: string
    user: AuthUser
  }
  message: string
}

export type RegisterResponse = AuthResponse

export type LoginResponse = AuthResponse

export interface RefreshTokenResponse {
  data: {
    access: string
  }
  message: string
}

export interface ProfileResponse {
  data: AuthUser
  message: string
}
