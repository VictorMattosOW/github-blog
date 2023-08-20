import { Link } from "@phosphor-icons/react";
import { ElementType } from "react";

interface IconAndDescription {
  icon: ElementType;
  description: string;
}

interface CardHeaderContent {
  name: string;
  description: string;
  link: string;
  iconsAndDescription: IconAndDescription[];
}

export function CardHeaderMainContent({
  name,
  description,
  link,
  iconsAndDescription = [],
}: CardHeaderContent) {
  return (
    <section className="w-full flex flex-col gap-2">
      <div className="flex justify-between">
        <h1 className="text-white text-2xl">{name}</h1>
        <div className="flex items-center text-[#3294F8] gap-2 hover:underline decoration-[#3294F8]">
          <a href={link}>Github</a>
          <Link size={17} />
        </div>
      </div>
      <div>
        <p className="text-[#AFC2D4] text-base">{description}</p>
      </div>
      <div className="mt-6 flex gap-6">
        {iconsAndDescription.map((el) => {
          return (
            <div className="text-[#AFC2D4] flex items-center gap-2">
              <el.icon size={20} weight="fill" />
              <p>{el.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
