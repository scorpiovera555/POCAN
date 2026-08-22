import BottomMenu from "./components/BottomMenu.jsx"
import Home from "./page/Home.jsx"
import CanteenProfile from "./page/Profile.jsx"
import { Router, LocationProvider, Route } from "preact-iso";
import { useEffect, useState } from "react";

export function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // 1. Tambahkan state loading

  useEffect(() => {
    const GetProduct = async () => {
      try {
        const raw = await fetch("https://dummyjson.com/products");
        if (!raw.ok) throw new Error(`Http error status ${raw.status}`);
        const product = await raw.json();
        setData(product.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    GetProduct();
  }, []);

  return (
    <LocationProvider>
      <main>
        {loading ? (
          <div>Loading...</div> // 3. Tampilkan pesan loading jika data belum siap
        ) : (
          <Router>
            <Route path="/" component={() => <Home datas={data} />} />
            <Route path="/kantin/:id" component={() => <CanteenProfile datas={data}/>} />
          </Router>
        )}
      </main>
      <BottomMenu />
    </LocationProvider>
  );
}