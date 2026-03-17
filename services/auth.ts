import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@/types/auth"

const REGISTER_ENDPOINT =
  "https://seral-parker-noncommittally.ngrok-free.dev/api/auth/register/"
const LOGIN_ENDPOINT =
  "https://seral-parker-noncommittally.ngrok-free.dev/api/auth/login/"

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
  const response = await fetch(REGISTER_ENDPOINT, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })

  const responseBody = (await response.json()) as unknown

  if (!response.ok) {
    throw new Error(
      getApiErrorMessage(responseBody, "Registration failed. Please try again.")
    )
  }

  return responseBody as RegisterResponse
}

export async function loginUser(payload: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(LOGIN_ENDPOINT, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })

  const responseBody = (await response.json()) as unknown

  if (!response.ok) {
    throw new Error(
      getApiErrorMessage(responseBody, "Login failed. Please try again.")
    )
  }

  return responseBody as LoginResponse
}
