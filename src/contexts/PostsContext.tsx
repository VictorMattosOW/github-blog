import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface PostsProviderProps {
  children: ReactNode
}

export interface Post {
  title: string
  post: string
  createdAt: string
  id: number
  url: string
}

interface PostsContextType {
  posts: Post[]
  selectedPost: Post
  handleSelectedPost(post: Post): void
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const [selectedPost, setSelectedPost] = useState<Post>({} as Post)

  function handleSelectedPost(post: Post) {
    setSelectedPost(post)
  }

  const fetchPosts = useCallback(async () => {
    const response = await api.get('')
    const formattedPosts = await formatPosts(response.data)
    setPosts(formattedPosts)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  async function formatPosts(postsToFormat: any): Post[] {
    const { items = [] } = postsToFormat
    const formattedPost: Post[] = items.reduce(
      (object, posts: any, index: number) => {
        const objPost = {
          title: posts.title,
          post: posts.body,
          createdAt: posts.created_at,
          id: posts.id,
          url: posts.html_url,
        }
        object[index] = objPost
        return object
      },
      [],
    )
    return formattedPost
  }

  return (
    <PostsContext.Provider value={{ posts, selectedPost, handleSelectedPost }}>
      {children}
    </PostsContext.Provider>
  )
}
