"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface BlogMarkdownProps {
  content: string
}

export function BlogMarkdown({ content }: BlogMarkdownProps) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
}
