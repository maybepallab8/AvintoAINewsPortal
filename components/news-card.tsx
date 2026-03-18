import type { Article } from "@/types/article"

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
  const { headline, imageUrl, summary, source, time, size, url } = article

  const imageElement = imageUrl ? (
    <img
      alt={headline}
      className="mb-3 h-full w-full rounded-sm object-cover"
      src={imageUrl}
    />
  ) : (
    <div className="mb-3 h-full w-full rounded-sm bg-linear-to-br from-zinc-300 via-zinc-400 to-zinc-600 opacity-80 dark:opacity-65" />
  )

  if (size === "featured") {
    return (
      <article className="group mb-6 break-inside-avoid rounded-sm border border-border bg-card p-3">
        <a href={url} rel="noreferrer" target="_blank">
          <div className="h-56 w-full">{imageElement}</div>
          <h2 className="mt-2 text-2xl font-black leading-snug tracking-tight group-hover:underline group-hover:underline-offset-2">
            {headline}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {summary}
          </p>
          <Meta source={source} time={time} />
        </a>
      </article>
    )
  }

  if (size === "standard") {
    return (
      <article className="group mb-6 break-inside-avoid rounded-sm border border-border bg-card p-3">
        <a href={url} rel="noreferrer" target="_blank">
          <div className="h-40 w-full">{imageElement}</div>
          <h3 className="mt-2 text-lg font-extrabold leading-snug tracking-tight group-hover:underline group-hover:underline-offset-2">
            {headline}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {summary}
          </p>
          <Meta source={source} time={time} />
        </a>
      </article>
    )
  }

  return (
    <article className="group mb-6 break-inside-avoid rounded-sm border border-border bg-card p-3">
      <a href={url} rel="noreferrer" target="_blank">
        <div className="h-28 w-full">{imageElement}</div>
        <h3 className="mt-2 text-base font-bold leading-snug tracking-tight group-hover:underline group-hover:underline-offset-2">
          {headline}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {summary}
        </p>
        <Meta source={source} time={time} />
      </a>
    </article>
  )
}
