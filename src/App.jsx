import "./App.css";
import Info from "./components/Info";
import Projectx from "./components/Projectx";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="p-5 grid gap-5 grid-cols-6 grid-rows-4 h-screen bg-black text-white">
      <div className="element row-span-2">1</div>
      <div className="element row-span-2">1.1</div>
      <div className="element font-[Space_Grotesk] font-semibold flex flex-col justify-center items-center">
        <div className="text-5xl">10+</div>
        <button className="shiny-text text-2xl">Projects</button>
      </div>
      <div className="element font-[Space_Grotesk] font-semibold flex flex-col justify-center items-center">
        <div className="text-5xl ">02+</div>
        <button className="shiny-text text-2xl">Year Expertise</button>
      </div>
      <div className="element col-span-2 row-span-2 flex flex-col justify-center items-center"><TechStack/></div>
      <div className="element col-span-2 row-start-3">5</div>
      <div className="element col-span-2 row-span-2"><Info/></div>
      <div className="element ">7</div>
      <div className="element row-span-2">8</div>
      <div className="element col-span-4"><Projectx/></div>
      <div className="element ">Contact</div>
    </div>
  );
}

export default App;
