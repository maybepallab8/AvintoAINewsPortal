import axios from "axios"

import type { ProfileResponse } from "@/types/auth"
import type { ApiArticle, PaginatedArticlesResponse } from "@/types/article"
import type { LikedPost, ProfileUser } from "@/types/profile"
import { getStoredAccessToken } from "@/utils/auth-storage"

const PROFILE_ENDPOINT = "/api/auth/profile"
const LIKED_ARTICLES_ENDPOINT = "/api/articles/liked"

function getDisplayName(firstName: string, lastName: string, username: string): string {
  const fullName = `${firstName} ${lastName}`.trim()

  return fullName.length > 0 ? fullName : username
}

function getRelativeTime(timestamp: string): string {
  const publishedTime = new Date(timestamp).getTime()
  const now = Date.now()
  const differenceInHours = Math.max(
    1,
    Math.floor((now - publishedTime) / 3_600_000)
  )

  if (differenceInHours < 24) {
    return `${differenceInHours}h ago`
  }

  const differenceInDays = Math.floor(differenceInHours / 24)
  return `${differenceInDays}d ago`
}

function mapFeedCategory(category: ApiArticle["feed_category"]): LikedPost["category"] {
  if (category === "ai") {
    return "AI"
  }

  if (category === "sports") {
    return "Sports"
  }

  return "World News"
}

function normalizeLikedPost(article: ApiArticle): LikedPost {
  return {
    category: mapFeedCategory(article.feed_category ?? article.feed.category),
    id: String(article.id),
    likedAt: getRelativeTime(article.published_at),
    likesCount: article.likes_count,
    summary:
      article.summary || article.content || "No summary available for this article.",
    title: article.title,
    url: article.url,
  }
}

export async function getProfile(): Promise<ProfileUser> {
  const accessToken = getStoredAccessToken()

  if (!accessToken) {
    throw new Error("Please log in to view your profile.")
  }

  const response = await axios.get<ProfileResponse>(PROFILE_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  const user = response.data.data

  return {
    email: user.email,
    name: getDisplayName(user.first_name, user.last_name, user.username),
    username: user.username,
  }
}

export async function getLikedPosts(): Promise<LikedPost[]> {
  const accessToken = getStoredAccessToken()

  if (!accessToken) {
    throw new Error("Please log in to view liked articles.")
  }

  const response = await axios.get<PaginatedArticlesResponse>(LIKED_ARTICLES_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return response.data.results.map(normalizeLikedPost)
}
