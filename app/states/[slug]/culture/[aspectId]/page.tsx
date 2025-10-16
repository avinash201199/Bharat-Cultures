import { notFound } from "next/navigation"
import Link from "next/link"
import { getStateBySlug } from "@/data/states"
import type { CultureAspect } from "@/data/types"

// ✅ Utility function to build fallback descriptive text
function buildFallbackContent(sName: string, aspect: CultureAspect, about?: string) {
  return [
    `${aspect.title} of ${sName}`,
    about ? about : `${sName} is renowned for its diverse cultural heritage across regions.`,
    aspect.description,
    `Significance: These practices reflect daily life, values, and the historical evolution of ${sName}'s people.`,
    `Experience it: Visit during local festivals or cultural centers to witness ${aspect.title.toLowerCase()} up close.`,
  ].join("\n\n")
}

// ✅ FIX: await params for Next.js 13/14 dynamic routes
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; aspectId: string }>
}) {
  const { slug, aspectId } = await params

  const s = getStateBySlug(slug)
  const aspect = s?.cultureAspects?.find((a) => a.id === aspectId)

  // Allowed fallback aspect IDs
  const allowed = ["festivals", "dance", "cuisine", "art", "rituals"]

  if (!s) return {}

  const fallback =
    allowed.includes(aspectId) &&
    ({
      id: aspectId,
      title:
        aspectId === "dance"
          ? "Dance & Devotion"
          : aspectId === "art"
          ? "Art & Handicrafts"
          : aspectId === "rituals"
          ? "Rituals & Customs"
          : aspectId === "cuisine"
          ? "Cuisine"
          : "Festivals",
      description: `Learn about ${aspectId.replace(/-/g, " ")} in ${s.name}.`,
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
  params: Promise<{ slug: string; aspectId: string }>
}) {
  const { slug, aspectId } = await params
  const s = getStateBySlug(slug)
  const aspect = s?.cultureAspects?.find((a) => a.id === aspectId)
  const allowed = ["festivals", "dance", "cuisine", "art", "rituals"]

  if (!s) return notFound()

  const resolvedAspect =
    aspect ||
    (allowed.includes(aspectId)
      ? ({
          id: aspectId,
          title:
            aspectId === "dance"
              ? "Dance & Devotion"
              : aspectId === "art"
              ? "Art & Handicrafts"
              : aspectId === "rituals"
              ? "Rituals & Customs"
              : aspectId === "cuisine"
              ? "Cuisine"
              : "Festivals",
          description: `Learn about ${aspectId.replace(/-/g, " ")} in ${s.name}.`,
          image: undefined,
          content: undefined,
        } as CultureAspect)
      : undefined)

  if (!resolvedAspect) return notFound()

  // ✅ Always show some image (fallback to heroImage or placeholder)
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
