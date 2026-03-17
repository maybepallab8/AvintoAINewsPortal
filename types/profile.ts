export type NewsCategory = "AI" | "Sports" | "World News"

export interface ProfileUser {
  name: string
  email: string
}

export interface LikedPost {
  id: string
  title: string
  summary: string
  category: NewsCategory
  likedAt: string
}
