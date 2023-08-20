import { CardHeader } from "../../components/CardHeader";
import { Feed } from "./Feed";
import { Buildings, GithubLogo, Users } from "@phosphor-icons/react";
export function Home() {
  return (
    <main className="bg-[#071422] flex-grow flex flex-col items-center">
      <CardHeader.Root>
        <CardHeader.Image></CardHeader.Image>
        <CardHeader.MainContent
          name="Victor Robaina de Mattos"
          description="Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass."
          link="https://github/victormattosOW"
          iconsAndDescription={[
            { icon: GithubLogo, description: "victormattosOW" },
            { icon: Buildings, description: "teste" },
            { icon: Users, description: "23 seguidores" },
          ]}
        ></CardHeader.MainContent>
      </CardHeader.Root>
      <Feed />
    </main>
  );
}
