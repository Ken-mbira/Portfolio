"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/blog/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

type Category = "all" | "technical" | "non-technical"

interface BlogFiltersProps {
  posts: BlogPost[]
}

export function BlogFilters({ posts }: BlogFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory)

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <Button
          variant={selectedCategory === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory("all")}
        >
          All
        </Button>
        <Button
          variant={selectedCategory === "technical" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory("technical")}
        >
          Technical
        </Button>
        <Button
          variant={selectedCategory === "non-technical" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory("non-technical")}
        >
          Non-Technical
        </Button>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            No blog posts found in this category. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                <div className="relative w-full h-48 bg-muted">
                  {post.bannerImage && (
                    <Image
                      src={post.bannerImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
                <CardHeader className="text-left">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <CardTitle className="line-clamp-2 text-left">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-left">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="text-left">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category === "technical" ? "Technical" : "Non-Technical"}
                    </Badge>
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
