import { notFound } from "next/navigation"
import { getStateBySlug } from "@/data/states"
import Link from "next/link"

export async function generateMetadata({
  params,
}: {
  params: { slug: string; storyId: string }
}) {
  const s = getStateBySlug(params.slug)
  const story = s?.stories?.find((st) => st.id === params.storyId)
  if (!s || !story) return {}
  return {
    title: `${story.title} — ${s.name} — Bharat Cultures`,
    description: story.excerpt || `A story from ${s.name}.`,
  }
}

export default function StateStoryPage({
  params,
}: {
  params: { slug: string; storyId: string }
}) {
  const s = getStateBySlug(params.slug)
  const story = s?.stories?.find((st) => st.id === params.storyId)
  if (!s || !story) return notFound()

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href={`/states/${s.slug}`} className="text-sm text-muted-foreground hover:underline">
        ← Back to {s.name}
      </Link>
      <h1 className="mt-3 text-2xl font-semibold">{story.title}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{story.excerpt}</p>
      <div className="prose mt-4 max-w-none text-foreground prose-p:my-3">
        <p>{story.content}</p>
        <p className="mt-4 rounded-md border border-border bg-card p-3 text-sm">
          <span className="font-medium">Moral:</span> {story.moral}
        </p>
      </div>
    </div>
  )
}
