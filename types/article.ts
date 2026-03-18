export type Category = "AI" | "Sports" | "World"
export type ApiArticleCategory = "ai" | "sports" | "world_news"
export type ArticleSize = "featured" | "standard" | "compact"

export interface ArticleFeed {
  category: ApiArticleCategory
  id: number
  name: string
  url: string
}

export interface ApiArticle {
  author: string
  content: string
  fetched_at: string
  feed: ArticleFeed
  id: number
  image_url: string
  language: string
  likes_count: number
  published_at: string
  slug: string
  summary: string
  tags: string[]
  title: string
  url: string
}

export interface PaginatedArticlesResponse {
  count: number
  next: string | null
  previous: string | null
  results: ApiArticle[]
}

export interface Article {
  category: Category
  headline: string
  id: string
  imageUrl: string | null
  size: ArticleSize
  source: string
  summary: string
  time: string
  url: string
}
