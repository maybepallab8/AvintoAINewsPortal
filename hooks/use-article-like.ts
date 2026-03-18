"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import {
  getArticleLikeStatus,
  likeArticle,
} from "@/services/article-likes"
import type { ArticleLikeData } from "@/types/article"

function getLikeQueryKey(articleId: string): [string, string] {
  return ["article-like", articleId]
}

export function useArticleLike(
  articleId: string,
  initialLikesCount: number
): {
  errorMessage: string | null
  isLiking: boolean
  isLoading: boolean
  likeArticleById: () => Promise<void>
  liked: boolean
  likesCount: number
} {
  const queryClient = useQueryClient()

  const likeStatusQuery = useQuery({
    queryFn: async () => (await getArticleLikeStatus(articleId)).data,
    queryKey: getLikeQueryKey(articleId),
  })

  const likeMutation = useMutation({
    mutationFn: async () => (await likeArticle(articleId)).data,
    onSuccess: (data) => {
      queryClient.setQueryData<ArticleLikeData>(getLikeQueryKey(articleId), data)
    },
  })

  return {
    errorMessage:
      likeStatusQuery.error instanceof Error
        ? likeStatusQuery.error.message
        : likeMutation.error instanceof Error
          ? likeMutation.error.message
          : null,
    isLiking: likeMutation.isPending,
    isLoading: likeStatusQuery.isLoading,
    likeArticleById: async () => {
      await likeMutation.mutateAsync()
    },
    liked: likeStatusQuery.data?.liked ?? false,
    likesCount: likeStatusQuery.data?.likes_count ?? initialLikesCount,
  }
}
