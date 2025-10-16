"use client"

import React, { useState } from "react"
import { toast, Toaster } from "sonner" // make sure: npm i sonner

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [errors, setErrors] = useState<{ name?: string; email?: string; msg?: string }>({})

  const validate = () => {
    const newErrors: typeof errors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name.trim()) newErrors.name = "Name is required"
    else if (name.trim().length < 3) newErrors.name = "Name must be at least 3 characters"

    if (!email.trim()) newErrors.email = "Email is required"
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format"

    if (!msg.trim()) newErrors.msg = "Message cannot be empty"
    else if (msg.trim().length < 10) newErrors.msg = "Message must be at least 10 characters"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      const messages = Object.values(errors).filter(Boolean).join("\n• ")
      toast.error(`❌ Please fix the following errors:\n• ${messages}`, {
        style: { backgroundColor: "#fee2e2", color: "#b91c1c" },
      })
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, msg }),
      })

      const data = await res.json()

      if (res.ok) {
        toast.success(data.message || "✅ Your message has been sent!")
        setName("")
        setEmail("")
        setMsg("")
        setErrors({})
      } else {
        toast.error(data.error || "❌ Failed to send message. Please try again.")
      }
    } catch (error) {
      toast.error("⚠️ Error sending message. Check your internet or try later.")
    }
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <Toaster /> {/* Required for toast notifications */}
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2 text-muted-foreground">
        Have feedback or ideas? We’d love to hear from you.
      </p>

      <form className="mt-6 space-y-3" onSubmit={onSubmit}>
        {/* Name */}
        <div>
          <label className="mb-1 block text-sm" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-1 block text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
        >
          Send
        </button>
      </form>
    </div>
  )
}
