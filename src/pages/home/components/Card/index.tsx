import { Post, PostsContext } from '../../../../contexts/PostsContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface CardProps {
  post: Post
}

export function Card({ post }: CardProps) {
  const { handleSelectedPost } = useContext(PostsContext)
  return (
    <div className="h-[260px] bg-[#112131] grid grid-cols-1 grid-rows-[auto,1fr] gap-5 rounded-xl p-8">
      <div className="grid grid-cols-[1fr,20%] justify-between">
        <Link
          to={'/post'}
          onClick={() => handleSelectedPost(post)}
          className="text-[#E7EDF4] text-xl hover:underline hover:underline-offset-4 hover:decoration-solid hover:underline-[#E7EDF4]"
        >
          {post.title}
        </Link>
        <time className="text-sm text-[#7B96B2] justify-self-end mt-1">
          {formatDistanceToNow(new Date(post.createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </time>
      </div>
      <p className="text-[#AFC2D4] line-clamp-5">{post.post}</p>
    </div>
  )
}
