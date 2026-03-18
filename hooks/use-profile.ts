"use client"

import { useQuery } from "@tanstack/react-query"

import { getProfile } from "@/services/profile"
import type { ProfileUser } from "@/types/profile"

export function useProfile(): {
  errorMessage: string | null
  isLoading: boolean
  user: ProfileUser | null
} {
  const profileQuery = useQuery({
    queryFn: getProfile,
    queryKey: ["profile"],
  })

  return {
    errorMessage:
      profileQuery.error instanceof Error ? profileQuery.error.message : null,
    isLoading: profileQuery.isLoading,
    user: profileQuery.data ?? null,
  }
}
