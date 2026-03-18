"use client"

import { useQueries } from "@tanstack/react-query"

import { getArticlesByCategory } from "@/services/articles"
import type { Article, Category } from "@/types/article"

const categories: Category[] = ["AI", "Sports", "World"]

export function useHomeArticles(): {
  articlesByCategory: Record<Category, Article[]>
  categoryErrors: Partial<Record<Category, string>>
  isLoading: boolean
} {
  const queryResults = useQueries({
    queries: categories.map((category) => ({
      queryFn: async () => await getArticlesByCategory(category),
      queryKey: ["articles", category],
    })),
  })

  const articlesByCategory = categories.reduce<Record<Category, Article[]>>(
    (result, category, index) => {
      result[category] = queryResults[index]?.data ?? []
      return result
    },
    {
      AI: [],
      Sports: [],
      World: [],
    }
  )

  const categoryErrors = categories.reduce<Partial<Record<Category, string>>>(
    (result, category, index) => {
      const error = queryResults[index]?.error

      if (error instanceof Error) {
        result[category] = error.message
      }

      return result
    },
    {}
  )

  return {
    articlesByCategory,
    categoryErrors,
    isLoading: queryResults.some((queryResult) => queryResult.isLoading),
  }
}
