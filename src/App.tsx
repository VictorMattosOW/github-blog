import "./App.css";
import { CardHeader } from "./components/CardHeader";
import { Feed } from "./components/Feed";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="px-60 h-screen flex flex-col">
      <Header />
      <main className="bg-[#071422] flex-grow flex flex-col items-center">
        <CardHeader />
        <Feed />
      </main>
    </div>
  );
}

export default App;
