import { cn } from "@/lib/utils"
import type { Article } from "@/lib/news-data"

function CategoryBadge({
  label,
  className,
}: {
  label: string
  className: string
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-sm px-1.5 py-px text-[10px] font-bold uppercase tracking-widest",
        className,
      )}
    >
      {label}
    </span>
  )
}

function Meta({ source, time }: { source: string; time: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
      <span className="font-semibold">{source}</span>
      <span aria-hidden>·</span>
      <span>{time}</span>
    </p>
  )
}

interface NewsCardProps {
  article: Article
  badgeClassName: string
}

export function NewsCard({ article, badgeClassName }: NewsCardProps) {
  const { headline, summary, source, time, size, imageGradient, category } =
    article

  if (size === "featured") {
    return (
      <article className="group mb-6 cursor-pointer border-b border-border pb-6">
        <div
          className={cn(
            "mb-3 h-44 w-full rounded-sm bg-gradient-to-br opacity-75 dark:opacity-60",
            imageGradient,
          )}
        />
        <CategoryBadge label={category} className={badgeClassName} />
        <h2 className="mt-2 text-xl font-black leading-snug tracking-tight group-hover:underline group-hover:underline-offset-2">
          {headline}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {summary}
        </p>
        <Meta source={source} time={time} />
      </article>
    )
  }

  if (size === "standard") {
    return (
      <article className="group mb-5 flex cursor-pointer gap-3 border-b border-border pb-5">
        <div
          className={cn(
            "h-20 w-20 shrink-0 rounded-sm bg-gradient-to-br opacity-75 dark:opacity-60",
            imageGradient,
          )}
        />
        <div className="min-w-0">
          <h3 className="line-clamp-3 text-sm font-bold leading-snug tracking-tight group-hover:underline group-hover:underline-offset-2">
            {headline}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {summary}
          </p>
          <Meta source={source} time={time} />
        </div>
      </article>
    )
  }

  return (
    <article className="group mb-4 flex cursor-pointer gap-3 border-b border-border pb-4 last:border-b-0">
      <div
        className={cn(
          "h-16 w-16 shrink-0 rounded-sm bg-gradient-to-br opacity-75 dark:opacity-60",
          imageGradient,
        )}
      />
      <div className="min-w-0">
        <CategoryBadge label={category} className={badgeClassName} />
        <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug tracking-tight group-hover:underline group-hover:underline-offset-2">
          {headline}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {summary}
        </p>
        <Meta source={source} time={time} />
      </div>
    </article>
  )
}
