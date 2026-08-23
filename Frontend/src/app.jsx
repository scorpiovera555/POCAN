import BottomMenu from "./components/BottomMenu.jsx"
import Home from "./page/Home.jsx"
import CanteenProfile from "./page/Profile.jsx"
import { Router, LocationProvider, Route } from "preact-iso";
import { useEffect, useState, createContext } from "react";

export const ItemsContext = createContext();
export const UsersContext = createContext();

export function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const GetProduct = async () => {
      try {
        const raw = await fetch("https://dummyjson.com/products");
        const res = await fetch("https://dummyjson.com/users");

        if (!raw.ok || !res.ok) throw new Error(`Http error status ${raw.status} and ${res.status}`);
        const product = await raw.json();
        const canteen = await res.json();
        setUser(canteen.users)
        setData(product.products);
      } catch (err) {
        console.error(err);
      }
    };
    GetProduct();
  }, []);

  console.log(user)

  return (
    <LocationProvider>
      <main>
        <ItemsContext.Provider value={data}>
          <UsersContext.Provider value={user}>
            <Router>
              <Route path="/" component={() => <Home/>} />
              <Route path="/kantin/:id" component={() => <CanteenProfile/>} />
            </Router>
          </UsersContext.Provider>
        </ItemsContext.Provider>
      </main>
      <BottomMenu />
    </LocationProvider>
  );
}