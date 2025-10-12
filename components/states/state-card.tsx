import Link from "next/link"

export function StateCard({
  slug,
  name,
  image,
  tagline,
}: {
  slug: string
  name: string
  image: string
  tagline?: string
}) {
  return (
    <Link
      href={`/states/${slug}`}
      className="group block overflow-hidden rounded-lg border border-border"
      aria-label={`Explore ${name}`}
    >
      <div className="relative aspect-[4/3]">
        <img
          src={image || "/placeholder.svg"}
          alt={`${name} cultural preview`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-3">
          <h3 className="text-base font-semibold text-foreground">{name}</h3>
          {tagline ? <p className="text-xs text-muted-foreground">{tagline}</p> : null}
        </div>
      </div>
    </Link>
  )
}
