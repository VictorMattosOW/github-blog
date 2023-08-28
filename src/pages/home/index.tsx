import { Card } from "./components/Card";
import { Feed } from "./components/Feed";

export function Home() {
  return (
    <div className="h-full w-[864px] mt-[-30]">
      <Card />
      <Feed />
    </div>
  )
}