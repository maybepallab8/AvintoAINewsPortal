import { Bot, Globe, Trophy } from "lucide-react"

import { NewsCard } from "@/components/news-card"
import { articles, columnConfig } from "@/lib/news-data"
import { cn } from "@/lib/utils"

const columnIcons = {
  AI: Bot,
  Sports: Trophy,
  World: Globe,
}

function formatDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function Page() {
  return (
    <div className="min-h-svh bg-background">
      {/* ── Masthead ──────────────────────────────────────────────────────── */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-xs text-muted-foreground">
            <time dateTime={new Date().toISOString().slice(0, 10)}>
              {formatDate()}
            </time>
            <span className="font-mono">
              Press{" "}
              <kbd className="rounded border border-border px-1 py-px text-[10px]">
                D
              </kbd>{" "}
              to toggle dark mode
            </span>
          </div>

          {/* Nameplate */}
          <div className="border-y border-border py-4 text-center">
            <h1 className="text-5xl font-black tracking-tight">NEWSPAPER AI</h1>
            <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              AI · Sports · World — curated, every hour
            </p>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-3">
            {columnConfig.map(({ key, label, accent }, i) => {
              const Icon = columnIcons[key]
              return (
                <div
                  key={key}
                  className={cn(
                    "flex items-center gap-2 py-2.5 text-xs font-bold uppercase tracking-widest",
                    accent,
                    i > 0 && "border-l border-border pl-6",
                  )}
                >
                  <Icon className="size-3.5" />
                  {label}
                </div>
              )
            })}
          </div>
        </div>
      </header>

      {/* ── 3-column masonry grid ─────────────────────────────────────────── */}
      <main className="mx-auto max-w-7xl">
        <div className="grid grid-cols-3 divide-x divide-border">
          {columnConfig.map(({ key, badge }, i) => {
            const columnArticles = articles.filter((a) => a.category === key)
            return (
              <div
                key={key}
                className={cn("px-6 pt-6 pb-12", i === 0 && "pl-6")}
              >
                {columnArticles.map((article) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                    badgeClassName={badge}
                  />
                ))}
              </div>
            )
          })}
        </div>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <p>
          © 2026{" "}
          <span className="font-semibold text-foreground">Newspaper AI</span> —
          Powered by Next.js
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-widest opacity-60">
          Demo content · not real news
        </p>
      </footer>
    </div>
  )
}
