"use client"

import { Heart } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { useArticleLike } from "@/hooks/use-article-like"

interface ArticleLikeButtonProps {
  articleId: string
  initialLikesCount: number
}

export function ArticleLikeButton({
  articleId,
  initialLikesCount,
}: ArticleLikeButtonProps): React.JSX.Element {
  const { errorMessage, isLiking, isLoading, likeArticleById, liked, likesCount } =
    useArticleLike(articleId, initialLikesCount)

  async function handleLikeClick(): Promise<void> {
    try {
      await likeArticleById()
      toast.success("Article liked successfully.")
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to like the article."

      toast.error(message)
    }
  }

  return (
    <div className="mt-3 flex items-center justify-between gap-3">
      <Button
        aria-label={liked ? "Article liked" : "Like article"}
        className="gap-2"
        disabled={isLoading || isLiking || liked}
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()
          void handleLikeClick()
        }}
        size="sm"
        type="button"
        variant={liked ? "default" : "outline"}
      >
        <Heart className={liked ? "fill-current" : ""} />
        {liked ? "Liked" : isLiking ? "Liking..." : "Like"}
      </Button>

      <div className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">{likesCount}</span> likes
      </div>

      {errorMessage ? <span className="sr-only">{errorMessage}</span> : null}
    </div>
  )
}
