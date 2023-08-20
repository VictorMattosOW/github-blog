import { Card } from "../Card/Card.index";

export function Feed() {
  return (
    <section className="mt-16 w-[864px]">
      <div>
        <div className="flex justify-between mb-3">
          <h2 className="text-[#C4D4E3] text-lg">Publicações</h2>
          <p className="text-[#7B96B2]">6 publicações</p>
        </div>

        <input
          type="text"
          className="w-full h-[50px] px-4 py-3 rounded-lg bg-[#040F1A] placeholder:text-[#3A536B] text-[#90a0b0]"
          placeholder="Buscas conteúdo"
        />
      </div>
      <div className="w-[864px] grid grid-cols-2 gap-8 mb-20 mt-12">
        <Card />
      </div>
    </section>
  );
}
