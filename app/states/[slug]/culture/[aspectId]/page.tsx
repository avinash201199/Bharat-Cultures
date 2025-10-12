import { notFound } from "next/navigation"
import Link from "next/link"
import { getStateBySlug } from "@/data/states"
import type { CultureAspect } from "@/data/types"

function buildFallbackContent(sName: string, aspect: CultureAspect, about?: string) {
  return [
    `${aspect.title} of ${sName}`,
    about ? about : `${sName} is renowned for its diverse cultural heritage across regions.`,
    aspect.description,
    `Significance: These practices reflect daily life, values, and the historical evolution of ${sName}'s people.`,
    `Experience it: Visit during local festivals or cultural centers to witness ${aspect.title.toLowerCase()} up close.`,
  ].join("\n\n")
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; aspectId: string }
}) {
  const s = getStateBySlug(params.slug)
  const aspect = s?.cultureAspects?.find((a) => a.id === params.aspectId)
  // allow certain predefined aspect ids to have fallback pages
  const allowed = ["festivals", "dance", "cuisine", "art", "rituals"]

  if (!s) return {}

  const fallback =
    allowed.includes(params.aspectId) &&
    ( {
      id: params.aspectId,
      title:
        params.aspectId === "dance"
          ? "Dance & Devotion"
          : params.aspectId === "art"
          ? "Art & Handicrafts"
          : params.aspectId === "rituals"
          ? "Rituals & Customs"
          : params.aspectId === "cuisine"
          ? "Cuisine"
          : "Festivals",
      description: `Learn about ${params.aspectId.replace(/-/g, " ")} in ${s.name}.`,
      image: undefined,
      content: undefined,
    } as CultureAspect)

  const resolvedAspect = aspect ?? fallback
  if (!resolvedAspect) return {}

  return {
    title: `${resolvedAspect.title} — ${s.name} — Bharat Cultures`,
    description: resolvedAspect.description,
  }
}

export default async function StateCultureAspectPage({
  params,
}: {
  params: { slug: string; aspectId: string }
}) {
  const s = getStateBySlug(params.slug)
  const aspect = s?.cultureAspects?.find((a) => a.id === params.aspectId)
  const allowed = ["festivals", "dance", "cuisine", "art", "rituals"]

  if (!s) return notFound()

  const resolvedAspect =
    aspect ||
    (allowed.includes(params.aspectId)
      ? ({
          id: params.aspectId,
          title:
            params.aspectId === "dance"
              ? "Dance & Devotion"
              : params.aspectId === "art"
              ? "Art & Handicrafts"
              : params.aspectId === "rituals"
              ? "Rituals & Customs"
              : params.aspectId === "cuisine"
              ? "Cuisine"
              : "Festivals",
          description: `Learn about ${params.aspectId.replace(/-/g, " ")} in ${s.name}.`,
          image: undefined,
          content: undefined,
        } as CultureAspect)
      : undefined)

  if (!resolvedAspect) return notFound()

  // Ensure there's always an image shown on the detail page.
  const image = resolvedAspect.image ?? s.heroImage ?? `/placeholder.svg?query=${encodeURIComponent(
    `${resolvedAspect.title} ${s.name}`
  )}`

  const content = resolvedAspect.content || buildFallbackContent(s.name, resolvedAspect, s.about)

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href={`/states/${s.slug}`} className="text-sm text-muted-foreground hover:underline">
        ← Back to {s.name}
      </Link>

      <header className="mt-3">
        <h1 className="text-2xl font-semibold">
          {resolvedAspect.title} — {s.name}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{resolvedAspect.description}</p>
      </header>

      <div className="mt-4 overflow-hidden rounded-lg border border-border">
        <img src={image} alt={resolvedAspect.title} className="aspect-[16/9] w-full object-cover" />
      </div>

      <article className="prose mt-6 max-w-none text-foreground prose-p:my-3">
        {content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </article>
    </div>
  )
}
