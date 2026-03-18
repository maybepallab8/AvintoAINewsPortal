const ACCESS_TOKEN_STORAGE_KEY = "newspaper-ai.access-token"
const REFRESH_TOKEN_STORAGE_KEY = "newspaper-ai.refresh-token"

export interface AuthTokens {
  access: string
  refresh: string
}

export function setStoredAuthTokens(tokens: AuthTokens): void {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, tokens.access)
  window.localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, tokens.refresh)
}

export function getStoredAuthTokens(): AuthTokens | null {
  if (typeof window === "undefined") {
    return null
  }

  const access = window.localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
  const refresh = window.localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY)

  if (!access || !refresh) {
    return null
  }

  return { access, refresh }
}

export function getStoredAccessToken(): string | null {
  if (typeof window === "undefined") {
    return null
  }

  return window.localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
}

export function getStoredRefreshToken(): string | null {
  if (typeof window === "undefined") {
    return null
  }

  return window.localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY)
}

export function setStoredAccessToken(accessToken: string): void {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken)
}

export function clearStoredAuthTokens(): void {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY)
  window.localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY)
}
