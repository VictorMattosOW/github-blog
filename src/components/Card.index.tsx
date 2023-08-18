export function Card() {
  return (
    <div className="w-[416px] h-[260px] flex flex-col gap-5 bg-[#112131] rounded-lg p-8 overflow-hidden">
      <div className="flex justify-between items-start">
        <h1 className="text-xl text-[#E7EDF4]">
          JavaScript data types and data structures
        </h1>
        <time
          className="text-sm text-[#7B96B2] whitespace-nowrap mt-2"
          title="12h"
        >
          Há 1 dia
        </time>
      </div>
      <p className="h-32 text-base text-[#AFC2D4] line-clamp-5">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string
        foo = true; // foo is now a boolean
      </p>
    </div>
  );
}
