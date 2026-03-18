import axios from "axios"

import type { ArticleLikeResponse } from "@/types/article"
import { getStoredAccessToken } from "@/utils/auth-storage"

function getAuthHeaders(): Record<string, string> {
  const accessToken = getStoredAccessToken()

  return accessToken
    ? {
        Authorization: `Bearer ${accessToken}`,
      }
    : {}
}

export async function getArticleLikeStatus(
  articleId: string
): Promise<ArticleLikeResponse> {
  const response = await axios.get<ArticleLikeResponse>(
    `/api/articles/${articleId}/likes`,
    {
      headers: getAuthHeaders(),
    }
  )

  return response.data
}

export async function likeArticle(articleId: string): Promise<ArticleLikeResponse> {
  const response = await axios.post<ArticleLikeResponse>(
    `/api/articles/${articleId}/like`,
    {},
    {
      headers: getAuthHeaders(),
    }
  )

  return response.data
}
