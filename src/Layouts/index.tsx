import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="h-screen w-[1440px] bg-[#071422] grid grid-cols-1 grid-rows-[auto,1fr] place-items-center">
      <Header />
      <Outlet />
    </div>
  )
}