"use client"
import { useState } from "react"
import type { StateBrief } from "@/data/types"
import { SearchBar } from "./search-bar"
import { StatesGrid } from "./states-grid"

export function StatesBrowser({ items }: { items: StateBrief[] }) {
  const [q, setQ] = useState("")
  return (
    <div className="space-y-4">
      <SearchBar value={q} onChange={setQ} />
      <StatesGrid items={items} query={q} />
    </div>
  )
}
