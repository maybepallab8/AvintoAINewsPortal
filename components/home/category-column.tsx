import { NewsCard } from "@/components/news-card"
import { Skeleton } from "@/components/ui/skeleton"
import type { Article, Category } from "@/types/article"

interface CategoryColumnProps {
  accent: string
  accentText: string
  articles: Article[]
  errorMessage: string | undefined
  label: string
  category: Category
  isLoading: boolean
}

function CategoryColumnSkeleton(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div className="border border-border bg-card p-3">
        <Skeleton className="mb-3 h-56 w-full rounded-sm" />
        <Skeleton className="h-7 w-4/5" />
        <Skeleton className="mt-3 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-3/4" />
      </div>
      <div className="border border-border bg-card p-3">
        <Skeleton className="mb-3 h-40 w-full rounded-sm" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="mt-3 h-4 w-full" />
      </div>
    </div>
  )
}

export function CategoryColumn({
  accent,
  accentText,
  articles,
  category,
  errorMessage,
  isLoading,
  label,
}: CategoryColumnProps): React.JSX.Element {
  return (
    <section aria-label={category}>
      <div className="mb-5 border-b border-border/80 pb-3">
        <div className={`mb-2 h-0.5 w-10 ${accent}`} />
        <h2
          className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${accentText}`}
        >
          {label}
        </h2>
      </div>

      {isLoading ? <CategoryColumnSkeleton /> : null}

      {!isLoading && errorMessage ? (
        <div className="rounded-sm border border-border bg-card p-4 text-sm text-muted-foreground">
          {errorMessage}
        </div>
      ) : null}

      {!isLoading && !errorMessage && articles.length === 0 ? (
        <div className="rounded-sm border border-border bg-card p-4 text-sm text-muted-foreground">
          No articles available for this category right now.
        </div>
      ) : null}

      {!isLoading && !errorMessage ? (
        <div>
          {articles.map((article) => (
            <NewsCard article={article} key={article.id} />
          ))}
        </div>
      ) : null}
    </section>
  )
}
