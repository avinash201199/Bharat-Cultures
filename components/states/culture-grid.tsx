import type { CultureAspect } from "@/data/types"
import Link from "next/link"

type RequiredAspect = {
  id: string
  title: string
  aliases?: string[]
}

export function CultureGrid({ items, slug }: { items: CultureAspect[]; slug: string }) {
  const required: RequiredAspect[] = [
    { id: "festivals", title: "Festivals" },
    { id: "dance", title: "Dance & Devotion", aliases: ["music", "music-and-dance"] },
    { id: "cuisine", title: "Cuisine" },
    { id: "art", title: "Art & Handicrafts", aliases: ["crafts", "handicrafts"] },
    { id: "rituals", title: "Rituals & Customs", aliases: ["ritual"] },
  ]

  // Ensure consistent final shape for each canonical aspect.
  const finalItems: CultureAspect[] = required.map((req) => {
    const found = (items || []).find((a) => {
      if (a.id === req.id) return true
      if (req.aliases && req.aliases.includes(a.id)) return true
      return false
    })

    return {
      id: req.id,
      // Force canonical display title so every state card looks consistent
      title: req.title,
      description: found?.description ?? `Learn about ${req.title.toLowerCase()} in this state.`,
      image: found?.image,
      content: found?.content,
    }
  })

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {finalItems.map((c) => (
        <Link
          key={c.id}
          href={`/states/${slug}/culture/${c.id}`}
          className="overflow-hidden rounded-lg border border-border bg-card hover:bg-accent"
        >
          <img
            src={c.image || `/placeholder.svg?query=${encodeURIComponent(c.title)}`}
            alt={c.title}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-base font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
            <span className="mt-2 inline-block text-xs text-primary">Learn more →</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
