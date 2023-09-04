import { useContext } from 'react'
import { Card } from './Card'
import { PostsContext } from '../../contexts/PostsContext'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

export function Post() {
  const { selectedPost } = useContext(PostsContext)
  const { post } = selectedPost

  return (
    <div className="grid gap-10">
      <Card />
      <section className="px-8 py-10 text-[#AFC2D4] whitespace-pre-wrap">
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          skipHtml={false}
          remarkPlugins={[gfm]}
        >
          {post}
        </ReactMarkdown>
      </section>
    </div>
  )
}
