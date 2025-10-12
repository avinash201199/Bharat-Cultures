"use client"

export function SearchBar({
  value,
  onChange,
  placeholder = "Search states or UTs...",
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <div className="w-full">
      <label className="sr-only" htmlFor="state-search">
        Search
      </label>
      <input
        id="state-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/0 transition-shadow focus:ring-2"
      />
    </div>
  )
}
