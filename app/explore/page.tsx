import { getAllStatesBrief } from "@/data/states"
import { StatesBrowser } from "@/components/states/states-browser"

export default function ExplorePage() {
  const states = getAllStatesBrief()
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Explore States & UTs</h1>
        <p className="mt-1 text-muted-foreground">Filter and discover regions you want to learn about.</p>
      </header>
      <StatesBrowser items={states} />
    </div>
  )
}
