# Blog Structure

This directory contains all blog posts, each in its own self-contained directory.

## Directory Structure

Each blog post has its own directory with the following structure:

```
src/blog/
├── post-slug/
│   └── post.json          # Blog post metadata and content
│
public/blog/
├── post-slug/
│   └── images/            # All images for this blog post
│       ├── banner.jpg
│       └── other-images...
```

## Adding a New Blog Post

1. Create a new directory in `src/blog/` with a descriptive slug (e.g., `my-awesome-post`)
2. Create a `post.json` file inside that directory
3. Create a corresponding directory in `public/blog/` with the same slug
4. Create an `images/` subdirectory inside `public/blog/[slug]/` for all images

## JSON Structure

Each blog post JSON file should follow this structure:

```json
{
  "title": "Your Blog Post Title",
  "slug": "your-blog-post-slug",
  "excerpt": "A short description of your blog post that appears in the listing page.",
  "author": "Ken Mbira",
  "date": "2024-01-15",
  "bannerImage": "images/banner.jpg",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "category": "technical",
  "contents": "# Your Markdown Content\n\nWrite your blog post content here in Markdown format."
}
```

## Fields

- **title**: The title of your blog post
- **slug**: URL-friendly identifier (should match the directory name)
- **excerpt**: Short summary shown on the blog listing page
- **author**: Author name (defaults to "Ken Mbira")
- **date**: Publication date in YYYY-MM-DD format
- **bannerImage**: Path to the banner image relative to the post's images directory (e.g., `images/banner.jpg`)
- **tags**: Array of tag strings
- **category**: Either `"technical"` or `"non-technical"`
- **contents**: Full blog post content in Markdown format

## Images

Place all blog images in the `public/blog/[slug]/images/` directory. Reference them in your JSON using paths like `images/filename.jpg`. The system will automatically resolve these to `/blog/[slug]/images/filename.jpg`.

## Categories

Blogs are organized into two main categories:
- **technical**: Technical articles, tutorials, and engineering content
- **non-technical**: Personal thoughts, experiences, and non-technical content

## Markdown Support

The blog supports full Markdown including:
- Headings
- Lists (ordered and unordered)
- Code blocks
- Inline code
- Links
- Images
- Blockquotes
- Tables (via GitHub Flavored Markdown)
- And more!
