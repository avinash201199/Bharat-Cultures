export type CultureAspect = {
  id: string
  title: string
  description: string
  image?: string
  content?: string
}

export type Story = {
  id: string
  title: string
  excerpt: string
  content: string
  moral: string
}

export type GalleryItem = {
  src: string
  alt: string
}

export type StateBrief = {
  slug: string
  name: string
  tagline?: string
  heroImage?: string
}

export type StateData = StateBrief & {
  about?: string
  cultureAspects?: CultureAspect[]
  stories?: Story[]
  gallery?: GalleryItem[]
  related?: string[]
}
