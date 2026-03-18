import axios from "axios"
import type {
  ApiArticle,
  ApiArticleCategory,
  Article,
  Category,
  PaginatedArticlesResponse,
} from "@/types/article"

export const ARTICLE_ENDPOINT = "/articles/"
const LOCAL_ARTICLE_PROXY_ENDPOINT = "/api/articles"

const categoryQueryMap: Record<Category, ApiArticleCategory> = {
  AI: "ai",
  Sports: "sports",
  World: "world_news",
}

function getRelativeTime(timestamp: string): string {
  const publishedTime = new Date(timestamp).getTime()
  const now = Date.now()
  const differenceInHours = Math.max(1, Math.floor((now - publishedTime) / 3_600_000))

  if (differenceInHours < 24) {
    return `${differenceInHours}h ago`
  }

  const differenceInDays = Math.floor(differenceInHours / 24)
  return `${differenceInDays}d ago`
}

function getArticleSize(index: number): Article["size"] {
  if (index === 0) {
    return "featured"
  }

  if (index === 1 || index === 3) {
    return "standard"
  }

  return "compact"
}

function normalizeArticle(apiArticle: ApiArticle, category: Category, index: number): Article {
  return {
    category,
    headline: apiArticle.title,
    id: String(apiArticle.id),
    imageUrl: apiArticle.image_url || null,
    likesCount: apiArticle.likes_count,
    size: getArticleSize(index),
    source: apiArticle.feed.name || apiArticle.author || "Unknown source",
    summary:
      apiArticle.summary || apiArticle.content || "No summary available for this article.",
    time: getRelativeTime(apiArticle.published_at),
    url: apiArticle.url,
  }
}

export async function getArticlesByCategory(category: Category): Promise<Article[]> {
  const response = await axios.get<PaginatedArticlesResponse>(LOCAL_ARTICLE_PROXY_ENDPOINT, {
    params: {
      category: categoryQueryMap[category],
      page: 1,
      page_size: 10,
    },
  })

  return response.data.results.map((article, index) =>
    normalizeArticle(article, category, index)
  )
}
