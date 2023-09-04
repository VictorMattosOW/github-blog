import { useContext, useState } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'
import { Card } from '../Card'

export function Feed() {
  const [search, setSearch] = useState('')
  const { posts } = useContext(PostsContext)

  const filteredPosts =
    search.length > 0 ? posts.filter((post) => post.title.includes(search)) : []

  return (
    <main className="grid grid-cols-2 grid-rows-[auto,1fr] gap-y-12 gap-x-8 my-16 ">
      <header className="col-span-full">
        <div className="flex justify-between mb-4">
          <h3 className="text-[#C4D4E3] text-base">Publicações</h3>
          <p className="text-[#7B96B2] text-sm">{posts.length} publicações</p>
        </div>
        <input
          type="text"
          placeholder="Buscas conteúdo"
          className="w-full px-4 py-3 text-[#3A536B] text-base 
                    bg-[#040F1A] border border-1 
                    border-[#1C2F41] rounded-md focus:ring-1 ring-[#3294F8] focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
      {search.length > 0
        ? filteredPosts.map((p, index) => {
            return <Card key={index} post={p} />
          })
        : posts.map((p, index) => {
            return <Card key={index} post={p} />
          })}
    </main>
  )
}
