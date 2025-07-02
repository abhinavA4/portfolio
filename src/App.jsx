import './App.css'

function App() {

  return (
    <div className="p-5 grid gap-5 grid-cols-6 grid-rows-4 h-screen bg-black text-white">
      <div className="w-full border-2 rounded-2xl row-span-2">1</div>
      <div className='w-full border-2 rounded-2xl row-span-2'>1.1</div>
      <div className="w-full border-2 rounded-2xl font-[Space_Grotesk] font-semibold ">
        <div>
          10+
        </div>
        <button>
          Projects
        </button>
      </div>
      <div className="w-full border-2 rounded-2xl">Year Expertise</div>
      <div className="w-full border-2 rounded-2xl col-span-2 row-span-2">Tech Stack</div>
      <div className="w-full border-2 rounded-2xl col-span-2 row-start-3">5</div>
      <div className="w-full border-2 rounded-2xl col-span-2 row-span-2">Info</div>
      <div className="w-full border-2 rounded-2xl ">7</div>
      <div className="w-full border-2 rounded-2xl row-span-2">8</div>
      <div className="w-full border-2 rounded-2xl col-span-4">Projects</div>
      <div className="w-full border-2 rounded-2xl ">Contact</div>
    </div>
  )
}

export default App
