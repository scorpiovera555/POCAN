import BottomMenu from "./components/BottomMenu.jsx"
import Home from "./page/Home.jsx"
import CanteenProfile from "./page/Profile.jsx"
import Error from "./page/Error.jsx"
import { Router, LocationProvider, Route } from "preact-iso";
import { useEffect, useState, createContext } from "react";
import CanteenList from "./page/canteenList.jsx";
import { useFetch } from "./hooks/useFetch.js";

export const ItemsContext = createContext();
export const UsersContext = createContext();

export function App() {
  const { data, error } = useFetch("https://dummyjson.com/products");
  const usersData = useFetch("https://dummyjson.com/users");
  const user = usersData?.data?.users ?? [];
  const products = data?.products ?? [];

  if (error) {
    return <h1>tolong sambungkan ke internet</h1>;
  }

  return (
    <LocationProvider>
      <main>
        <ItemsContext.Provider value={products}>
          <UsersContext.Provider value={user}>
            <Router>
              <Route path="/" component={() => <Home/>} />
              <Route path="/kantin/:id" component={() => <CanteenProfile/>} />
              <Route path="/kantin" component={() => <CanteenList/>} />
              <Route default component={() => <Error/>} />
            </Router>
          </UsersContext.Provider>
        </ItemsContext.Provider>
      </main>
      <BottomMenu />
    </LocationProvider>
  );
}