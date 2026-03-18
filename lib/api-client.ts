import axios, {
  AxiosError,
  AxiosHeaders,
  type InternalAxiosRequestConfig,
} from "axios"

import type { RefreshTokenResponse } from "@/types/auth"
import {
  clearStoredAuthTokens,
  getStoredAccessToken,
  getStoredRefreshToken,
  setStoredAccessToken,
} from "@/utils/auth-storage"

const API_BASE_URL = process.env["NEXT_PUBLIC_API_URL"]

if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not configured.")
}

const apiBaseUrl = API_BASE_URL.replace(/\/$/, "")
const LOGIN_ENDPOINT_PATH = "/auth/login/"
const REGISTER_ENDPOINT_PATH = "/auth/register/"
const REFRESH_ENDPOINT_PATH = "/auth/refresh/"
const SHARED_API_HEADERS = {
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "true",
}

interface RetryableRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean
}

let refreshAccessTokenPromise: Promise<string> | null = null

async function refreshAccessToken(): Promise<string> {
  const refreshToken = getStoredRefreshToken()

  if (!refreshToken) {
    throw new Error("Refresh token is not available.")
  }

  const response = await axios.post<RefreshTokenResponse>(
    `${apiBaseUrl}${REFRESH_ENDPOINT_PATH}`,
    {
      refresh: refreshToken,
    },
    {
      headers: SHARED_API_HEADERS,
    }
  )

  const accessToken = response.data.data.access

  setStoredAccessToken(accessToken)

  return accessToken
}

function ensureHeaders(
  config: InternalAxiosRequestConfig
): AxiosHeaders {
  const headers =
    config.headers instanceof AxiosHeaders
      ? config.headers
      : AxiosHeaders.from(config.headers)

  config.headers = headers

  return headers
}

export const apiClient = axios.create({
  baseURL: apiBaseUrl,
  headers: SHARED_API_HEADERS,
})

apiClient.interceptors.request.use((config) => {
  const accessToken = getStoredAccessToken()
  const requestUrl = config.url

  if (
    !accessToken ||
    requestUrl === LOGIN_ENDPOINT_PATH ||
    requestUrl === REGISTER_ENDPOINT_PATH ||
    requestUrl === REFRESH_ENDPOINT_PATH
  ) {
    return config
  }

  const headers = ensureHeaders(config)
  headers.set("Authorization", `Bearer ${accessToken}`)

  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableRequestConfig | undefined
    const statusCode = error.response?.status
    const requestUrl = originalRequest?.url

    if (!originalRequest || statusCode !== 401 || originalRequest._retry) {
      return Promise.reject(error)
    }

    if (
      requestUrl === LOGIN_ENDPOINT_PATH ||
      requestUrl === REGISTER_ENDPOINT_PATH ||
      requestUrl === REFRESH_ENDPOINT_PATH
    ) {
      return Promise.reject(error)
    }

    originalRequest._retry = true

    try {
      refreshAccessTokenPromise ??= refreshAccessToken()
      const newAccessToken = await refreshAccessTokenPromise
      const headers = ensureHeaders(originalRequest)
      headers.set("Authorization", `Bearer ${newAccessToken}`)

      return await apiClient(originalRequest)
    } catch (refreshError) {
      clearStoredAuthTokens()
      return Promise.reject(refreshError)
    } finally {
      refreshAccessTokenPromise = null
    }
  }
)
