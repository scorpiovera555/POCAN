import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Beranda")

  return (
    <div className="bg-linear-to-b from-green-200 to-green-100 h-full">
      <header className="py-4">
        <div className="fixed z-100 top-0 py-3 border-1 border-white/20 rounded-b-xl flex justify-center w-full bg-white/0 backdrop-blur-lg">
          <button className="bg-white p-1 w-10 h-10 text-xl font-bold absolute left-4 rounded-full">&#9776;</button>
          <h1 className="p-1 text-xl font-semibold font-['Segoe_UI', sans-serif]">{title}</h1>
        </div>
      </header>
      <main className="mt-10">
        <Outlet />
      </main>
      <footer>
        <Navbar setTitle={setTitle}/>
      </footer>
    </div>
  )
}

export default App;