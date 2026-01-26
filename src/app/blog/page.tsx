import type { Metadata } from "next"
import Link from "next/link"
import { getAllBlogPosts } from "@/blog/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { BlogFilters } from "@/components/blog-filters"

export const metadata: Metadata = {
  title: "Blog | Ken Mbira",
  description: "Thoughts and insights.",
  openGraph: {
    title: "Blog | Ken Mbira",
    description: "Thoughts and insights.",
    type: "website",
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="bg-background/80 backdrop-blur-sm border rounded-xl max-w-6xl mx-auto">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
              Ken Mbira
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/blog"
                className="text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Blog
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1> */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Thoughts and insights.
            </p>

            {/* Category Filters */}
            <BlogFilters posts={posts} />
          </div>
        </div>
      </main>
    </div>
  )
}
