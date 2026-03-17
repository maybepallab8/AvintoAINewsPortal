import { cn } from "@/lib/utils"
import type { Article } from "@/lib/news-data"

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
}

export function NewsCard({ article }: NewsCardProps) {
  const { headline, summary, source, time, size, imageGradient } = article

  if (size === "featured") {
    return (
      <article className="group mb-6 break-inside-avoid cursor-pointer rounded-sm border border-border bg-card p-3">
        <div
          className={cn(
            "mb-3 h-56 w-full rounded-sm bg-gradient-to-br opacity-80 dark:opacity-65",
            imageGradient,
          )}
        />
        <h2 className="mt-2 text-2xl font-black leading-snug tracking-tight group-hover:underline group-hover:underline-offset-2">
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
      <article className="group mb-6 break-inside-avoid cursor-pointer rounded-sm border border-border bg-card p-3">
        <div
          className={cn(
            "mb-3 h-40 w-full rounded-sm bg-gradient-to-br opacity-80 dark:opacity-65",
            imageGradient,
          )}
        />
        <h3 className="mt-2 text-lg font-extrabold leading-snug tracking-tight group-hover:underline group-hover:underline-offset-2">
          {headline}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {summary}
        </p>
        <Meta source={source} time={time} />
      </article>
    )
  }

  return (
    <article className="group mb-6 break-inside-avoid cursor-pointer rounded-sm border border-border bg-card p-3">
      <div
        className={cn(
          "mb-3 h-28 w-full rounded-sm bg-gradient-to-br opacity-80 dark:opacity-65",
          imageGradient,
        )}
      />
      <h3 className="mt-2 text-base font-bold leading-snug tracking-tight group-hover:underline group-hover:underline-offset-2">
        {headline}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {summary}
      </p>
      <Meta source={source} time={time} />
    </article>
  )
}
