import { BlogPost } from "./types"
import fs from "fs"
import path from "path"

const blogDirectory = path.join(process.cwd(), "src/blog")

export function getAllBlogSlugs(): string[] {
  try {
    const entries = fs.readdirSync(blogDirectory, { withFileTypes: true })
    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
  } catch (error) {
    console.error("Error reading blog directory:", error)
    return []
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const postDirectory = path.join(blogDirectory, slug)
    const jsonPath = path.join(postDirectory, "post.json")
    
    if (!fs.existsSync(jsonPath)) {
      console.error(`Post JSON not found: ${jsonPath}`)
      return null
    }
    
    const fileContents = fs.readFileSync(jsonPath, "utf8")
    const post = JSON.parse(fileContents) as BlogPost
    
    // Update banner image path to point to public directory
    // Images are stored in public/blog/[slug]/images/
    if (post.bannerImage) {
      if (post.bannerImage.startsWith("images/")) {
        post.bannerImage = `/blog/${slug}/${post.bannerImage}`
      } else if (!post.bannerImage.startsWith("/")) {
        post.bannerImage = `/blog/${slug}/images/${post.bannerImage}`
      }
    }
    
    return post
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs()
  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getBlogPostsByCategory(category: "technical" | "non-technical" | "all"): BlogPost[] {
  const allPosts = getAllBlogPosts()
  if (category === "all") {
    return allPosts
  }
  return allPosts.filter((post) => post.category === category)
}
