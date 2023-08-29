import { Buildings, GithubLogo, Users } from "@phosphor-icons/react";

export function Card() {
  return (
    <header className="max-h-[212px] bg-[#0B1B2B] mt-[-80px] px-10 py-8 relative rounded-2xl grid grid-cols-[25%,1fr]">
      <img
        className="max-h-[148px] m-h-[148px] rounded-lg"
        src="https://github.com/victorMattosOW.png"
        alt=""
      />
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-[#E7EDF4] text-2xl">victor Robaina de Mattos</h1>
          <a
            href=""
            className="text-[#3294F8] border-none hover:border-[#3294F8] hover:border-b-2 hover:border-solid"
          >
            GITHUB
          </a>
        </div>
        <p className="text-[#AFC2D4] text-base mt-2 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, id
          dolores. Voluptatibus, et fugiat consectetur debitis quasi doloremque.
        </p>
        <div className="flex gap-6">
          <div className="flex gap-2 items-center text-[#C4D4E3]">
            <GithubLogo size={20} />
            <p className="text-base">victormattosOW</p>
          </div>
          <div className="flex gap-2 items-center text-[#C4D4E3]">
            <Buildings size={20} />
            <p className="text-base">rocketseat</p>
          </div>
          <div className="flex gap-2 items-center text-[#C4D4E3]">
            <Users size={20} /> 
            <p className="text-base">32 seguidores</p>
          </div>
        </div>
      </div>
    </header>
  );
}
