import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layouts";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";


export function Router() {
  return (
    <Routes>
      <Route Component={DefaultLayout}>
        <Route path="/" Component={Home} />
        <Route path="/post" Component={Post} />
      </Route>
    </Routes>
  )
}