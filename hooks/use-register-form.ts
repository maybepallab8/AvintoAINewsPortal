"use client"

import type { ChangeEvent, FormEvent } from "react"

import { useMutation } from "@tanstack/react-query"
import { useCallback, useState } from "react"

import { registerUser } from "@/services/auth"
import type { RegisterRequest, RegisterResponse } from "@/types/auth"
import { setStoredAuthTokens } from "@/utils/auth-storage"

const initialValues: RegisterRequest = {
  email: "",
  first_name: "",
  last_name: "",
  password: "",
  password_confirm: "",
  username: "",
}

interface UseRegisterFormResult {
  errorMessage: string | null
  formValues: RegisterRequest
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (
    event: FormEvent<HTMLFormElement>
  ) => Promise<{ errorMessage: string | null; response: RegisterResponse | null }>
  isSubmitting: boolean
  successMessage: string | null
}

export function useRegisterForm(): UseRegisterFormResult {
  const [formValues, setFormValues] = useState<RegisterRequest>(initialValues)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const registerMutation = useMutation({
    mutationFn: registerUser,
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
        password_confirm: "",
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
    ): Promise<{
      errorMessage: string | null
      response: RegisterResponse | null
    }> => {
      event.preventDefault()

      if (formValues.password !== formValues.password_confirm) {
        const mismatchMessage = "Password and confirm password must match."

        setErrorMessage(mismatchMessage)
        setSuccessMessage(null)
        return { errorMessage: mismatchMessage, response: null }
      }

      try {
        const response = await registerMutation.mutateAsync(formValues)

        return { errorMessage: null, response }
      } catch (error: unknown) {
        const message =
          error instanceof Error
            ? error.message
            : "Registration failed. Please try again."

        setErrorMessage(message)
        setSuccessMessage(null)
        return { errorMessage: message, response: null }
      }
    },
    [formValues, registerMutation]
  )

  return {
    errorMessage,
    formValues,
    handleInputChange,
    handleSubmit,
    isSubmitting: registerMutation.isPending,
    successMessage,
  }
}
