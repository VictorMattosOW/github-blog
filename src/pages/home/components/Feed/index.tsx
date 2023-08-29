export function Feed() {
  return (
    <main className="grid grid-cols-2 grid-rows-[auto,1fr] gap-y-12 gap-x-8 my-16 ">
      <header className="col-span-full">
        <div className="flex justify-between mb-4">
          <h3 className="text-[#C4D4E3] text-base">Publicações</h3>
          <p className="text-[#7B96B2] text-sm">6 publicações</p>
        </div>
        <input
          type="text"
          placeholder="Buscas conteúdo"
          className="w-full px-4 py-3 text-[#3A536B] text-base 
                    bg-[#040F1A] border border-1 
                    border-[#1C2F41] rounded-md focus:ring-1 ring-[#3294F8] focus:outline-none"
        />
      </header>
      <div className="h-[260px] bg-[#112131] grid grid-cols-1 grid-rows-[auto,1fr] gap-5 rounded-xl p-8">
        <div className="grid grid-cols-[1fr,20%] justify-between">
          <h2 className="text-[#E7EDF4] text-xl">
            JavaScript data types and data structures
          </h2>
          <time className="text-sm text-[#7B96B2] justify-self-end mt-1">
            há 1 dia.
          </time>
        </div>
        <p className="text-[#AFC2D4] line-clamp-5">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types: let foo = 42; // foo is now a number
          foo = 'bar'; // foo is now a string foo = true; // foo is now a
          boolean
        </p>
      </div>
    </main>
  );
}
