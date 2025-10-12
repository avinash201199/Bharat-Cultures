"use client"

import { getRelatedStates } from "@/data/states"
import { CultureGrid } from "@/components/states/culture-grid"
import { Gallery } from "@/components/states/gallery"
import Link from "next/link"
import type { StateData } from "@/data/types"

function CommentBox() {
  return (
    <form
      className="mt-3 flex flex-col gap-2 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault()
        alert("Thanks for sharing! (demo)")
      }}
    >
      <label className="sr-only" htmlFor="comment">
        Comment
      </label>
      <input
        id="comment"
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/0 focus:ring-2"
        placeholder="I loved the festivals..."
      />
      <button type="submit" className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
        Share
      </button>
    </form>
  )
}

export default function StateDetailPageClient({
  state,
  params,
}: {
  state: StateData
  params: { slug: string }
}) {
  // Use the server-resolved state passed from the page.tsx
  if (!state) return <p className="text-sm text-muted-foreground">State not found.</p>

  const related = state.related?.length ? getRelatedStates(state.related) : []

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* Header */}
      <section>
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="relative">
            <img
              src={state.heroImage || `/placeholder.svg?height=360&width=800&query=${encodeURIComponent(state.name)}`}
              alt={`${state.name} banner`}
              className="aspect-[16/6] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <h1 className="text-2xl font-semibold">{state.name}</h1>
              {state.tagline ? <p className="text-sm text-muted-foreground">{state.tagline}</p> : null}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="mt-2 text-muted-foreground">{state.about || "More detailed cultural content coming soon."}</p>
      </section>

      {/* Culture & Practices */}
      {state.cultureAspects?.length ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Culture & Practices</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Festivals, Dance & Devotion, Cuisine, Art & Handicrafts, Rituals & Customs
          </p>
          <div className="mt-4">
            <CultureGrid items={state.cultureAspects} slug={state.slug} />
          </div>
        </section>
      ) : null}

      {/* Stories & Sayings */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Stories & Sayings that Inspire</h2>
        {state.stories?.length ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {state.stories.map((st) => (
              <article key={st.id} className="rounded-lg border border-border bg-card p-4">
                <h3 className="text-base font-semibold">{st.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{st.excerpt}</p>
                <Link
                  className="mt-3 inline-block rounded-md bg-primary px-3 py-2 text-xs text-primary-foreground"
                  href={`/states/${state.slug}/stories/${st.id}`}
                >
                  Read full story
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">Stories will be added soon.</p>
        )}
      </section>

      {/* Gallery */}
      {state.gallery?.length ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Gallery</h2>
          <div className="mt-3">
            <Gallery items={state.gallery} />
          </div>
        </section>
      ) : null}

      {/* Related */}
      {related.length ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Related States & Cultures</h2>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/states/${r.slug}`}
                className="rounded-md border border-border p-3 hover:bg-accent"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={r.heroImage || `/placeholder.svg?height=80&width=120&query=${encodeURIComponent(r.name)}`}
                    alt={r.name}
                    className="h-16 w-24 rounded object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{r.name}</p>
                    {r.tagline ? <p className="text-xs text-muted-foreground">{r.tagline}</p> : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* Comment / Share (placeholder) */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Share what you learned</h2>
        <p className="mt-1 text-sm text-muted-foreground">Tell us your favorite aspect of {state.name} (demo only).</p>
        <CommentBox />
      </section>
    </div>
  )
}

// (Was: export default StateDetailPageClient; export { StateDetailPageClient };)
