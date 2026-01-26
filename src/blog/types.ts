export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  author: string
  date: string
  bannerImage: string
  tags: string[]
  contents: string
  category: "technical" | "non-technical"
}
