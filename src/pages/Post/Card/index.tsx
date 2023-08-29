import {
  ArrowSquareUpRight,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "@phosphor-icons/react";

export function Card() {
  return (
    <header className="h-[168px] bg-[#0B1B2B] mt-[-80px] p-8 py-8 rounded-2xl grid grid-rows-3 gap-2">
      <div className="flex justify-between items-center">
        <a
          href=""
          className="text-[#3294F8] text-sm flex gap-1 items-center border-none hover:border-[#3294F8] hover:border-b-2 hover:border-solid"
        >
          <CaretLeft size={16} />
          Voltar
        </a>
        <a
          href=""
          className="text-[#3294F8] text-xs flex gap-1 items-center border-none hover:border-[#3294F8] hover:border-b-2 hover:border-solid"
        >
          VER NO GITHUB
          <ArrowSquareUpRight size={16} />
        </a>
      </div>
      
      <h1 className="text-[#E7EDF4] text-2xl">
        JavaScript data types and data structures
      </h1>
      
      <div className="flex gap-6 text-[#7B96B2]">
        <div className="flex gap-2 items-center">
          <GithubLogo size={20} />
          <p className="text-base">victormattosOW</p>
        </div>
        <div className="flex gap-2 items-center">
          <Calendar size={20} />
          <p className="text-base">Há 1 dia</p>
        </div>
        <div className="flex gap-2 items-center">
          <ChatCircle size={20} weight="fill"/>
          <p className="text-base">5 comentários</p>
        </div>
      </div>
    </header>
  );
}