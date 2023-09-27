import { useState } from "react"


function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[red]" onClick={() => setColor("red")}>Red</button>
            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[green]" onClick={() => setColor("green")}>Green</button>
            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[blue]" onClick={() => setColor("blue")}>Blue</button>
            <button className=" outline-none px-4 py-1 rounded-full text-black shadow-lg bg-[yellow]" onClick={() => setColor("yellow")}>yellow</button>
            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[olive]" onClick={() => setColor("olive")}>Olive</button>
            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[gray]" onClick={() => setColor("gray")}>Gray</button>
            <button className=" outline-none px-4 py-1 rounded-full text-black shadow-lg bg-[pink]" onClick={() => setColor("pink")}>pink</button>
            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[purple]" onClick={() => setColor("purple")}>purple</button>
            <button className=" outline-none px-4 py-1 rounded-full text-black shadow-lg bg-[lavender]" onClick={() => setColor("lavender")}>Lavender</button>
            <button className=" outline-none px-4 py-1 rounded-full text-black shadow-lg bg-[white]" onClick={() => setColor("white")}>white</button>
            <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[black]" onClick={() => setColor("black")}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
