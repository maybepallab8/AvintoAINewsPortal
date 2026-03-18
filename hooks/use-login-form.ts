"use client"

import type { ChangeEvent, FormEvent } from "react"

import { useMutation } from "@tanstack/react-query"
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onError: (error: Error) => {
      setErrorMessage(error.message)
      setSuccessMessage(null)
    },
    onSuccess: (response) => {
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
    },
  })

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

      try {
        const response = await loginMutation.mutateAsync(formValues)

        return { errorMessage: null, response }
      } catch (error: unknown) {
        const message =
          error instanceof Error
            ? error.message
            : "Login failed. Please try again."

        setErrorMessage(message)
        setSuccessMessage(null)

        return { errorMessage: message, response: null }
      }
    },
    [formValues, loginMutation]
  )

  return {
    errorMessage,
    formValues,
    handleInputChange,
    handleSubmit,
    isSubmitting: loginMutation.isPending,
    successMessage,
  }
}
