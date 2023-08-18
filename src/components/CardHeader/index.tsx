import { Buildings, GithubLogo, Link, Users } from "@phosphor-icons/react";

export function CardHeader() {
  return (
    <section className="w-[864px] m-[-80px] h-[212px] gap-8 px-10 py-8 bg-[#0B1B2B] rounded-xl flex mb-4">
      {/* imagem github */}
      <div className="w-48 h-38 bg-black rounded-lg"></div>
      <section className="w-full flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-white text-2xl">Victor Mattos</h1>
          <div className="flex items-center text-[#3294F8] gap-2 hover:underline decoration-[#3294F8]">
            <a href="http://">Github</a>
            <Link size={17} />
          </div>
        </div>
        <div>
          <p className="text-[#AFC2D4] text-base">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </div>
        <div className="mt-6 flex gap-6">
          <div className="text-[#AFC2D4] flex items-center gap-2">
            <GithubLogo size={20} weight="fill" />
            <p>cameronwll</p>
          </div>
          <div className="text-[#AFC2D4] flex items-center gap-2">
            <Buildings size={20} weight="fill" />
            <p>Rocketseat</p>
          </div>
          <div className="text-[#AFC2D4] flex items-center gap-2">
            <Users size={20} weight="fill" />
            <p>32 seguidores</p>
          </div>
        </div>
      </section>
    </section>
  );
}
