"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] contact submit", { name, email, msg })
    alert("Thanks for reaching out! This demo does not send emails yet.")
    setName("")
    setEmail("")
    setMsg("")
  }
  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2 text-muted-foreground">Have feedback or ideas? We’d love to hear from you.</p>
      <form className="mt-6 space-y-3" onSubmit={onSubmit}>
        <div>
          <label className="mb-1 block text-sm" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/0 focus:ring-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/0 focus:ring-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/0 focus:ring-2"
            rows={5}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
          Send
        </button>
      </form>
    </div>
  )
}
