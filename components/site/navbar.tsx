"use client"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-primary">
            Bharat Cultures
          </Link>
          <button
            className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
          <div className="hidden items-center gap-6 md:flex">
            <NavLinks />
          </div>
        </div>
        <div id="primary-nav" className={cn("md:hidden", open ? "block pb-4" : "hidden")}>
          <div className="flex flex-col gap-2">
            <NavLinks onClick={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const base = "rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
  return (
    <>
      <Link className={base} href="/" onClick={onClick}>
        Home
      </Link>
      <Link className={base} href="/about" onClick={onClick}>
        About
      </Link>
      <Link className={base} href="/explore" onClick={onClick}>
        Explore States
      </Link>
      <Link className={base} href="/contact" onClick={onClick}>
        Contact
      </Link>
    </>
  )
}
