import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Beranda")

  return (
    <div className="bg-green-100 h-screen">
      <header className="py-4">
        <div className="fixed flex justify-center w-full">
          <button className="bg-white p-1 w-9 h-9 font-bold absolute left-4 rounded-full">&#9776;</button>
          <h1 className="p-1 text-xl font-semibold">{title}</h1>
        </div>
      </header>
      <main className="mt-5">
        <Outlet />
      </main>
      <footer>
        <Navbar setTitle={setTitle}/>
      </footer>
    </div>
  )
}

export default App;