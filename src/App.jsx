import "./App.css";

function App() {
  return (
    <div className="bg-black h-screen overflow-y-auto min-h-[1200px] grid grid-cols-2 grid-rows-25 sm:grid-cols-17 sm:grid-rows-19 gap-3 p-3 text-white">
      <div className="element row-span-3 row-start-8 col-span-2 sm:col-span-9 sm:row-span-5">1</div>
      <div className="element row-span-3 sm:col-span-5 sm:row-span-5">2</div>
      <div className="element row-span-4 col-start-2 row-start-18 sm:row-span-8">3</div>
      <div className="element row-span-3 col-span-2 sm:col-span-5 sm:row-span-5">4</div>
      <div className="element row-span-4 col-start-1 row-start-1 col-span-2 sm:col-span-6 sm:row-span-8">5</div>
      <div className="element row-span-4 sm:col-span-3 sm:row-span-8">6</div>
      <div className="element row-span-3 col-start-2 row-start-5 sm:col-span-3 sm:row-span-5">7</div>
      <div className="element row-span-4 col-span-2 sm:col-span-5 sm:row-span-9">8</div>
      <div className="element row-span-4 col-span-2 row-start-11 sm:col-span-12 sm:row-span-6">9</div>
    </div>
  );
}

export default App;
