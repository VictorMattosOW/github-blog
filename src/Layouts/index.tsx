import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="h-screen grid justify-center">
      <div className="w-[1440px] bg-[#071422] grid grid-rows-[auto,1fr] justify-items-center">
        <Header />
        <div className="w-[864px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
