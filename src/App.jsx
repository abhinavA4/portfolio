import "./App.css";

function App() {
  return (
    <div className="bg-black min-h-screen sm:h-screen overflow-x-auto grid grid-cols-2 sm:grid-cols-17 sm:grid-rows-19 gap-3 p-3 text-white">
      <div className="element col-span-2 row-span-5 sm:col-span-9 sm:row-span-5">1</div>
      <div className="element row-span-5 sm:col-span-5 sm:row-span-5">2</div>
      <div className="element row-span-8 row-start-40 sm:col-span-3 sm:row-span-8">3</div>
      <div className="element col-span-2 row-span-5 sm:col-span-5 sm:row-span-5">4</div>
      <div className="element col-span-2 row-span-8 sm:col-span-6 sm:row-span-8">5</div>
      <div className="element row-span-8 col-start-2 row-start-40 sm:col-span-3 sm:row-span-8">6</div>
      <div className="element row-span-5 col-start-2 row-start-6 sm:col-span-3 sm:row-span-5">7</div>
      <div className="element col-span-2 row-span-9 sm:col-span-5 sm:row-span-9">8</div>
      <div className="element col-span-2 row-span-6 sm:col-span-12 sm:row-span-6">9</div>
    </div>
  );
}

export default App;
