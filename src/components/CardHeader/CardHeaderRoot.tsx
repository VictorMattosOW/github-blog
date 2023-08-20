import { ReactNode } from "react";

interface CardHeaderRootProps {
  children: ReactNode;
}

export function CardHeaderRoot({ children }: CardHeaderRootProps) {
  return (
    <section className="w-[864px] m-[-80px] min-h-[168px] gap-8 px-10 py-8 bg-[#0B1B2B] rounded-xl flex mb-4">
      {children}
    </section>
  );
}
