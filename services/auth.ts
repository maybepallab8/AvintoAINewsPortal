import { AxiosError } from "axios"

import { apiClient } from "@/lib/api-client"
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@/types/auth"

const REGISTER_ENDPOINT = "/auth/register/"
const LOGIN_ENDPOINT = "/auth/login/"

interface ApiErrorPayload {
  detail?: string
  message?: string
  [key: string]: unknown
}

function getApiErrorMessage(
  payload: unknown,
  fallbackMessage: string
): string {
  if (typeof payload === "string" && payload.length > 0) {
    return payload
  }

  if (typeof payload === "object" && payload !== null) {
    const errorPayload = payload as ApiErrorPayload

    if (typeof errorPayload.message === "string" && errorPayload.message.length > 0) {
      return errorPayload.message
    }

    if (typeof errorPayload.detail === "string" && errorPayload.detail.length > 0) {
      return errorPayload.detail
    }
  }

  return fallbackMessage
}

export async function registerUser(
  payload: RegisterRequest
): Promise<RegisterResponse> {
  try {
    const response = await apiClient.post<RegisterResponse>(
      REGISTER_ENDPOINT,
      payload
    )

    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        getApiErrorMessage(
          error.response?.data,
          "Registration failed. Please try again."
        )
      )
    }

    throw error
  }
}

export async function loginUser(payload: LoginRequest): Promise<LoginResponse> {
  try {
    const response = await apiClient.post<LoginResponse>(LOGIN_ENDPOINT, payload)

    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        getApiErrorMessage(error.response?.data, "Login failed. Please try again.")
      )
    }

    throw error
  }
}
