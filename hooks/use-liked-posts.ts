"use client"

import { useQuery } from "@tanstack/react-query"

import { getLikedPosts } from "@/services/profile"
import type { LikedPost } from "@/types/profile"

export function useLikedPosts(): {
  errorMessage: string | null
  isLoading: boolean
  posts: LikedPost[]
} {
  const likedPostsQuery = useQuery({
    queryFn: getLikedPosts,
    queryKey: ["liked-posts"],
  })

  return {
    errorMessage:
      likedPostsQuery.error instanceof Error
        ? likedPostsQuery.error.message
        : null,
    isLoading: likedPostsQuery.isLoading,
    posts: likedPostsQuery.data ?? [],
  }
}
