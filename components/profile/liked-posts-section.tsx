import type { LikedPost } from "@/types/profile"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface LikedPostsSectionProps {
  posts: LikedPost[]
}

export function LikedPostsSection({
  posts,
}: LikedPostsSectionProps): React.JSX.Element {
  return (
    <Card className="border-4 border-black bg-white text-black shadow-[8px_8px_0_#000] dark:border-white dark:bg-black dark:text-white dark:shadow-[8px_8px_0_#fff]">
      <CardHeader className="border-b-4 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black">
        <CardTitle className="text-2xl font-black uppercase tracking-tight">
          Liked posts
        </CardTitle>
        <p className="text-sm font-medium text-white dark:text-black">
          Saved posts can be replaced with backend-driven data later.
        </p>
      </CardHeader>

      <CardContent>
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
                <span>Liked {post.likedAt}</span>
              </div>

              <h3 className="mt-3 text-xl font-black uppercase leading-tight">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-6 font-medium">
                {post.summary}
              </p>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
