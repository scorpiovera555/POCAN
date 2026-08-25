import Navbar from "../components/navbar.jsx"
import Menu from "../components/Menu.jsx"
import ScrollUser from "../components/scroll.jsx"
import { useState, useContext } from "react"
import Search from "../components/search.jsx";
import { ItemsContext } from "../app";

function Home() {
    const [isSearch, setIsSearch] = useState(false);
    const [input, setInput] = useState("");
    const item = useContext(ItemsContext);
    console.log(isSearch);
    return (
        <>
        <Navbar onSearchFocus={() => setIsSearch(true)} setInput={setInput}/>
            {isSearch ? <Search back={() => setIsSearch(false)} items={item} input={input}/> : (
                <>
                <div className="mt-15 sm:mt-0 bg-bgcol">
                    <ScrollUser/>
                    <Menu/>
                </div>
                <div className="h-5 sm:hidden"></div>
                </>
            )}
        </>
    )
}

export default Home