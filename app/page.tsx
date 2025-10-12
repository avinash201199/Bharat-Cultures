import { getAllStatesBrief } from "@/data/states"
import { StatesBrowser } from "@/components/states/states-browser"

export default function HomePage() {
  const states = getAllStatesBrief()
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <section className="mb-8 text-center">
        <h1 className="text-balance text-3xl font-semibold sm:text-4xl">Explore India’s States & Union Territories</h1>
        <p className="mt-2 text-pretty text-muted-foreground">
          Discover stories, festivals, food, art, and rituals that unite us in diversity.
        </p>
      </section>

      <StatesBrowser items={states} />
    </div>
  )
}
