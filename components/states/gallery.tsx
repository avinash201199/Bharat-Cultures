import type { GalleryItem } from "@/data/types"

export function Gallery({ items }: { items: GalleryItem[] }) {
  if (!items?.length) return null
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((g, i) => (
        <figure key={i} className="overflow-hidden rounded-md border border-border">
          <img src={g.src || "/placeholder.svg"} alt={g.alt} className="aspect-[4/3] w-full object-cover" />
          <figcaption className="px-2 py-1 text-xs text-muted-foreground">{g.alt}</figcaption>
        </figure>
      ))}
    </div>
  )
}
