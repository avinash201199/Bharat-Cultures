"use client"

import React, { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [errors, setErrors] = useState<{ name?: string; email?: string; msg?: string }>({})

  const validate = () => {
    const newErrors: typeof errors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // ✅ Name validation
    if (!name.trim()) newErrors.name = "Name is required"
    else if (name.trim().length < 3) newErrors.name = "Name must be at least 3 characters long"

    // ✅ Email validation
    if (!email.trim()) newErrors.email = "Email is required"
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format"

    // ✅ Message validation
    if (!msg.trim()) newErrors.msg = "Message cannot be empty"
    else if (msg.length < 10) newErrors.msg = "Message must be at least 10 characters"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, msg }),
      })

      if (res.ok) {
        alert("✅ Message sent successfully!")
        setName("")
        setEmail("")
        setMsg("")
        setErrors({})
      } else {
        alert("❌ Failed to send message. Please try again.")
      }
    } catch (error) {
      alert("⚠️ Error sending message. Check your internet or try later.")
    }
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2 text-muted-foreground">Have feedback or ideas? We’d love to hear from you.</p>

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
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
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
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
          {errors.msg && <p className="text-red-500 text-xs mt-1">{errors.msg}</p>}
        </div>

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
