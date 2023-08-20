import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layouts";
import { Home } from "./pages/home";

export function Router() {
  return (
    <Routes>
      <Route Component={DefaultLayout}>
        <Route path="/" Component={Home} />
      </Route>
    </Routes>
  )
}