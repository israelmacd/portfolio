import { Header } from "./Components/Header/Header";
import "./styles/globals.css";
import { Bio } from "./Components/Bio/Bio";
function App() {
  return (
    <div className="bg-blue-100 h-screen flex justify-center">
      <div className="w-1/2">
        <Header />
        <h1 className="text-green-900 text-center text-3xl">
          {" "}
          This is Israel's portfolio. Also I'm the best.
        </h1>
        <Bio />
      </div>
    </div>
  );
}

export default App;
