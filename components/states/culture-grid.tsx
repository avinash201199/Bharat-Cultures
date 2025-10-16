import type { CultureAspect } from "@/data/types"
import Link from "next/link"

type RequiredAspect = {
  id: string
  title: string
  aliases?: string[]
}

export function CultureGrid({ items, slug }: { items: CultureAspect[]; slug: string }) {
  // Canonical default structure
  const defaultAspects: RequiredAspect[] = [
    { id: "festivals", title: "Festivals" },
    { id: "dance", title: "Dance & Devotion", aliases: ["music", "music-and-dance"] },
    { id: "cuisine", title: "Cuisine" },
    { id: "art", title: "Art & Handicrafts", aliases: ["crafts", "handicrafts"] },
    { id: "rituals", title: "Rituals & Customs", aliases: ["ritual"] },
  ]

  let finalItems: CultureAspect[] = []

  if (items && items.length > 0) {
    // 🟩 CASE 1: State has its own aspects — use them all dynamically
    finalItems = items.map((a) => ({
      id: a.id,
      title: a.title || a.id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      description:
        a.description || `Discover the significance of ${a.title?.toLowerCase() || a.id}.`,
      image: a.image,
      content: a.content,
    }))
  } else {
    // 🟨 CASE 2: Fallback to canonical defaults if no custom data
    finalItems = defaultAspects.map((req) => ({
      id: req.id,
      title: req.title,
      description: `Learn about ${req.title.toLowerCase()} in this state.`,
      image: `/placeholder.svg?query=${encodeURIComponent(req.title)}`,
      content: "",
    }))
  }

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
