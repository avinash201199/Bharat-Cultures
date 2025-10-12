"use client"

import { useMemo } from "react"
import { StateCard } from "./state-card"

export type StateBriefItem = {
  slug: string
  name: string
  tagline?: string
  heroImage?: string
}

export function StatesGrid({
  items,
  query,
}: {
  items: StateBriefItem[]
  query: string
}) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((s) => s.name.toLowerCase().includes(q))
  }, [items, query])
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {filtered.map((s) => (
        <StateCard
          key={s.slug}
          slug={s.slug}
          name={s.name}
          tagline={s.tagline}
          image={s.heroImage || `/placeholder.svg?height=360&width=640&query=${encodeURIComponent(s.name)}`}
        />
      ))}
    </div>
  )
}
