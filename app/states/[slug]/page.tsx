import StateDetailPageClient from "./page.client"
import { getStateBySlug } from "@/data/states"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getStateBySlug(params.slug)
  if (!s) return {}
  return {
    title: `${s.name} — Bharat Cultures`,
    description: s.tagline || `Explore culture, traditions, and stories from ${s.name}.`,
  }
}

export default async function StateDetailPage({ params }: { params: { slug: string } }) {
  const s = getStateBySlug(params.slug)
  if (!s) {
    notFound()
  }
  // Pass the fully resolved state data to the client component to avoid
  // re-querying on the client (which could yield empty/undefined slugs).
  return <StateDetailPageClient state={s!} params={params} />
}
