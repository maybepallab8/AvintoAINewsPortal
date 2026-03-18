"use client"

import Link from "next/link"

import { CategoryColumn } from "@/components/home/category-column"
import { Button } from "@/components/ui/button"
import { useHomeArticles } from "@/hooks/use-home-articles"
import type { Category } from "@/types/article"

const categories: Category[] = ["AI", "Sports", "World"]
const categoryMeta: Record<
  Category,
  { label: string; accent: string; accentText: string }
> = {
  AI: {
    label: "Artificial Intelligence",
    accent: "bg-violet-500/80 dark:bg-violet-400/80",
    accentText: "text-violet-700 dark:text-violet-300",
  },
  Sports: {
    label: "Sports",
    accent: "bg-emerald-500/80 dark:bg-emerald-400/80",
    accentText: "text-emerald-700 dark:text-emerald-300",
  },
  World: {
    label: "World News",
    accent: "bg-sky-500/80 dark:bg-sky-400/80",
    accentText: "text-sky-700 dark:text-sky-300",
  },
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
  const { articlesByCategory, categoryErrors, isLoading } = useHomeArticles()

  return (
    <div className="min-h-svh bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <time dateTime={new Date().toISOString().slice(0, 10)}>
              {formatDate()}
            </time>

            <div className="flex flex-wrap items-center gap-2 sm:justify-end">
              <Link href="/login">
                <Button size="sm" variant="outline">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Register</Button>
              </Link>
              <span className="font-mono">
                Press{" "}
                <kbd className="rounded border border-border px-1 py-px text-[10px]">
                  D
                </kbd>{" "}
                to toggle dark mode
              </span>
            </div>
          </div>

          <div className="mt-3 border-y border-border py-5 text-center">
            <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              AI · SPORTS · WORLD — CURATED EVERY HOUR
            </p>
            <h1 className="mt-2 text-4xl font-black tracking-[0.12em] sm:text-5xl">
              NEWSPAPER AI
            </h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((key) => (
            <CategoryColumn
              accent={categoryMeta[key].accent}
              accentText={categoryMeta[key].accentText}
              articles={articlesByCategory[key]}
              category={key}
              errorMessage={categoryErrors[key]}
              isLoading={isLoading}
              key={key}
              label={categoryMeta[key].label}
            />
          ))}
        </div>
      </main>

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
