import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="px-60 h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  )
}