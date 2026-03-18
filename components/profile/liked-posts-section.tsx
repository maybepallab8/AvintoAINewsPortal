import type { LikedPost } from "@/types/profile"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface LikedPostsSectionProps {
  errorMessage: string | null
  isLoading: boolean
  posts: LikedPost[]
}

export function LikedPostsSection({
  errorMessage,
  isLoading,
  posts,
}: LikedPostsSectionProps): React.JSX.Element {
  return (
    <Card className="border-4 border-black bg-white text-black shadow-[8px_8px_0_#000] dark:border-white dark:bg-black dark:text-white dark:shadow-[8px_8px_0_#fff]">
      <CardHeader className="border-b-4 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black">
        <CardTitle className="text-2xl font-black uppercase tracking-tight">
          Liked posts
        </CardTitle>
        <p className="text-sm font-medium text-white dark:text-black">
          Articles you have liked from the live news feed.
        </p>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <div className="text-sm font-medium">Loading liked articles...</div>
        ) : null}

        {!isLoading && errorMessage ? (
          <div className="text-sm font-medium">{errorMessage}</div>
        ) : null}

        {!isLoading && !errorMessage && posts.length === 0 ? (
          <div className="text-sm font-medium">
            You have not liked any articles yet.
          </div>
        ) : null}

        {!isLoading && !errorMessage ? (
          <div className="grid gap-4">
          {posts.map((post) => (
            <article
              className="border-4 border-black bg-white p-4 shadow-[5px_5px_0_#000] transition-transform hover:-translate-y-1 dark:border-white dark:bg-black dark:shadow-[5px_5px_0_#fff]"
              key={post.id}
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]">
                <Badge className="border-2 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black" variant="secondary">
                  {post.category}
                </Badge>
                <span>Published {post.likedAt}</span>
                <span>{post.likesCount} likes</span>
              </div>

              <a href={post.url} rel="noreferrer" target="_blank">
                <h3 className="mt-3 text-xl font-black uppercase leading-tight hover:underline">
                  {post.title}
                </h3>
              </a>
              <p className="mt-2 text-sm leading-6 font-medium">
                {post.summary}
              </p>
            </article>
          ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
