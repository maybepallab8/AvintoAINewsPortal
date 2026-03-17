"use client"

import type { ChangeEvent, FormEvent } from "react"

import { useCallback, useState } from "react"

import { loginUser } from "@/services/auth"
import type { LoginRequest, LoginResponse } from "@/types/auth"
import { setStoredAuthTokens } from "@/utils/auth-storage"

const initialValues: LoginRequest = {
  password: "",
  username: "",
}

interface UseLoginFormResult {
  errorMessage: string | null
  formValues: LoginRequest
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (
    event: FormEvent<HTMLFormElement>
  ) => Promise<{ errorMessage: string | null; response: LoginResponse | null }>
  isSubmitting: boolean
  successMessage: string | null
}

export function useLoginForm(): UseLoginFormResult {
  const [formValues, setFormValues] = useState<LoginRequest>(initialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target

      setFormValues((currentValues) => ({
        ...currentValues,
        [name]: value,
      }))
    },
    []
  )

  const handleSubmit = useCallback(
    async (
      event: FormEvent<HTMLFormElement>
    ): Promise<{ errorMessage: string | null; response: LoginResponse | null }> => {
      event.preventDefault()
      setIsSubmitting(true)

      try {
        const response = await loginUser(formValues)

        setStoredAuthTokens({
          access: response.data.access,
          refresh: response.data.refresh,
        })

        setSuccessMessage(response.message)
        setErrorMessage(null)
        setFormValues((currentValues) => ({
          ...currentValues,
          password: "",
        }))

        return { errorMessage: null, response }
      } catch (error: unknown) {
        const message =
          error instanceof Error
            ? error.message
            : "Login failed. Please try again."

        setErrorMessage(message)
        setSuccessMessage(null)

        return { errorMessage: message, response: null }
      } finally {
        setIsSubmitting(false)
      }
    },
    [formValues]
  )

  return {
    errorMessage,
    formValues,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    successMessage,
  }
}
